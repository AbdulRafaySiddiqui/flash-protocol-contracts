// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.6.12;

import "./interfaces/IFlashToken.sol";
import "./interfaces/IFlashReceiver.sol";
import "./interfaces/IFlashProtocol.sol";

import "./libraries/SafeMath.sol";
import "./libraries/Address.sol";

contract FlashProtocol is IFlashProtocol {
    using SafeMath for uint256;
    using Address for address;

    struct Stake {
        uint256 amountIn;
        uint256 expiry;
        uint256 expireAfter;
        uint256 mintedAmount;
        address staker;
        address receiver;
    }

    uint256 internal constant PRECISION = 1e18;
    uint256 internal constant MAX_FPY_FOR_1_YEAR = 5e17;

    uint256 internal constant SECONDS_IN_1_YEAR = 365 * 86400;

    address public override constant FLASH_TOKEN = 0x91D7d7Ef396e56535040676C2BB67e50D4330FaF;

    uint256 public override matchRatio;
    address public override matchReceiver;

    mapping(bytes32 => Stake) public override stakes;
    mapping(address => uint256) public override balances;

    event Staked(
        bytes32 _id,
        uint256 _amountIn,
        uint256 _expiry,
        uint256 _expireAfter,
        uint256 _mintedAmount,
        address indexed _staker,
        address indexed _receiver
    );

    event Unstaked(bytes32 _id, uint256 _amountIn, address indexed _staker);

    modifier onlyMatchReceiver {
        require(msg.sender == matchReceiver, "FlashProtocol:: NOT_MATCH_RECEIVER");
        _;
    }

    constructor(address _initialMatchReceiver) public {
        _setMatchReceiver(_initialMatchReceiver);
    }

    function setMatchReceiver(address _newMatchReceiver) external override onlyMatchReceiver {
        _setMatchReceiver(_newMatchReceiver);
    }

    function _setMatchReceiver(address _newMatchReceiver) internal {
        matchReceiver = _newMatchReceiver;
    }

    function setMatchRatio(uint256 _newMatchRatio) external override onlyMatchReceiver {
        require(_newMatchRatio >= 0 && _newMatchRatio <= 2000, "FlashProtocol:: INVALID_MATCH_RATIO");
        matchRatio = _newMatchRatio;
    }

    function stake(
        uint256 _amountIn,
        uint256 _expiry,
        address _receiver,
        bytes calldata _data
    )
        external
        override
        returns (
            uint256 mintedAmount,
            uint256 matchedAmount,
            bytes32 id
        )
    {
        require(_amountIn > 0, "FlashProtocol:: INVALID_AMOUNT");

        require(_receiver != address(this), "FlashProtocol:: INVALID_ADDRESS");

        address staker = msg.sender;

        require(_expiry <= calculateMaxStakePeriod(_amountIn), "FlashProtocol:: MAX_STAKE_PERIOD_EXCEEDS");

        uint256 expiration = block.timestamp.add(_expiry);

        IFlashToken(FLASH_TOKEN).transferFrom(staker, address(this), _amountIn);

        balances[staker] = balances[staker].add(_amountIn);

        id = keccak256(abi.encodePacked(_amountIn, _expiry, _receiver, staker, block.timestamp));

        require(stakes[id].staker == address(0), "FlashProtocol:: STAKE_EXISTS");

        mintedAmount = getMintAmount(_amountIn, _expiry);
        matchedAmount = getMatchedAmount(mintedAmount);

        IFlashToken(FLASH_TOKEN).mint(_receiver, mintedAmount);
        IFlashToken(FLASH_TOKEN).mint(matchReceiver, matchedAmount);

        stakes[id] = Stake(_amountIn, _expiry, expiration, mintedAmount, staker, _receiver);

        if (_receiver.isContract()) {
            IFlashReceiver(_receiver).receiveFlash(id, _amountIn, expiration, mintedAmount, staker, _data);
        }

        emit Staked(id, _amountIn, _expiry, expiration, mintedAmount, staker, _receiver);
    }

    function unstake(bytes32 _id) external override returns (uint256 withdrawAmount) {
        Stake memory s = stakes[_id];
        require(block.timestamp >= s.expireAfter, "FlashProtol:: STAKE_NOT_EXPIRED");
        balances[s.staker] = balances[s.staker].sub(s.amountIn);
        withdrawAmount = s.amountIn;
        delete stakes[_id];
        IFlashToken(FLASH_TOKEN).transfer(s.staker, withdrawAmount);
        emit Unstaked(_id, s.amountIn, s.staker);
    }

    function unstakeEarly(bytes32 _id) external override returns (uint256 withdrawAmount) {
        Stake memory s = stakes[_id];
        address staker = msg.sender;
        require(s.staker == staker, "FlashProtocol:: INVALID_STAKER");
        uint256 remainingTime = (s.expireAfter.sub(block.timestamp));
        uint256 burnAmount = _calculateBurn(s.amountIn, remainingTime, s.expiry);
        assert(burnAmount <= s.amountIn);
        balances[staker] = balances[staker].sub(s.amountIn);
        withdrawAmount = s.amountIn.sub(burnAmount);
        delete stakes[_id];
        IFlashToken(FLASH_TOKEN).burn(burnAmount);
        IFlashToken(FLASH_TOKEN).transfer(staker, withdrawAmount);
        emit Unstaked(_id, s.amountIn, staker);
    }

    function getMatchedAmount(uint256 _mintedAmount) public override view returns (uint256) {
        return _mintedAmount.mul(matchRatio).div(10000);
    }

    function getMintAmount(uint256 _amountIn, uint256 _expiry) public override view returns (uint256) {
        return _amountIn.mul(_expiry).mul(getFPY(_amountIn)).div(PRECISION * SECONDS_IN_1_YEAR);
    }

    function getFPY(uint256 _amountIn) public override view returns (uint256) {
        return (PRECISION.sub(getPercentageStaked(_amountIn))).div(2);
    }

    function getPercentageStaked(uint256 _amountIn) public override view returns (uint256 percentage) {
        uint256 locked = IFlashToken(FLASH_TOKEN).balanceOf(address(this)).add(_amountIn);
        percentage = locked.mul(PRECISION).div(IFlashToken(FLASH_TOKEN).totalSupply());
    }

    function _calculateBurn(
        uint256 _amount,
        uint256 _remainingTime,
        uint256 _totalTime
    ) private pure returns (uint256 burnAmount) {
        burnAmount = ((_amount.mul(_remainingTime)).div(_totalTime));
    }

    function calculateMaxStakePeriod(uint256 _amountIn) private view returns (uint256) {
        return MAX_FPY_FOR_1_YEAR.mul(SECONDS_IN_1_YEAR).div(getFPY(_amountIn));
    }
}
