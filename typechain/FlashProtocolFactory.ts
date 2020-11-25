/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import type {FlashProtocol} from "./FlashProtocol";

export class FlashProtocolFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _initialMatchReceiver: string,
    overrides?: Overrides
  ): Promise<FlashProtocol> {
    return super.deploy(_initialMatchReceiver, overrides || {}) as Promise<
      FlashProtocol
    >;
  }
  getDeployTransaction(
    _initialMatchReceiver: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_initialMatchReceiver, overrides || {});
  }
  attach(address: string): FlashProtocol {
    return super.attach(address) as FlashProtocol;
  }
  connect(signer: Signer): FlashProtocolFactory {
    return super.connect(signer) as FlashProtocolFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashProtocol {
    return new Contract(address, _abi, signerOrProvider) as FlashProtocol;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initialMatchReceiver",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_expireAfter",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_mintedAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_staker",
        type: "address",
      },
    ],
    name: "Unstaked",
    type: "event",
  },
  {
    inputs: [],
    name: "FLASH_TOKEN",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "getFPY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "getInvFPY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintedAmount",
        type: "uint256",
      },
    ],
    name: "getMatchedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
    ],
    name: "getMintAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "getPercentageStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "getPercentageUnStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IFlashProtocol.LockedFunctions",
        name: "_lockedFunction",
        type: "uint8",
      },
    ],
    name: "lockFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "matchRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "matchReceiver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newMatchRatio",
        type: "uint256",
      },
    ],
    name: "setMatchRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newMatchReceiver",
        type: "address",
      },
    ],
    name: "setMatchReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "stake",
    outputs: [
      {
        internalType: "uint256",
        name: "mintedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "matchedAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "stakes",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expireAfter",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintedAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IFlashProtocol.LockedFunctions",
        name: "",
        type: "uint8",
      },
    ],
    name: "timelock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IFlashProtocol.LockedFunctions",
        name: "_lockedFunction",
        type: "uint8",
      },
    ],
    name: "unlockFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "unstake",
    outputs: [
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "unstakeEarly",
    outputs: [
      {
        internalType: "uint256",
        name: "withdrawAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516118dd3803806118dd8339818101604052602081101561003357600080fd5b505161003e81610044565b50610066565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b611868806100756000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80638fee6407116100ad578063b4fa3b9811610071578063b4fa3b98146103bc578063c17bae2a146103dc578063cc704d54146103fc578063d08c970214610419578063e345a380146104215761012c565b80638fee640714610256578063a066983d146102b2578063aa53099d1461035c578063aad4717d1461037c578063b3e1f050146103995761012c565b80635b49129e116100f45780635b49129e146101ef57806368220664146101f757806371ed5d1a1461021457806376f5cf28146102315780637aadef8b1461024e5761012c565b80631051f6961461013157806321edc93d1461016057806323c6e14c1461017d57806327212b5b146101a157806327e235e3146101c9575b600080fd5b61014e6004803603602081101561014757600080fd5b503561043e565b60408051918252519081900360200190f35b61014e6004803603602081101561017657600080fd5b5035610467565b610185610484565b604080516001600160a01b039092168252519081900360200190f35b6101c7600480360360208110156101b757600080fd5b50356001600160a01b031661049c565b005b61014e600480360360208110156101df57600080fd5b50356001600160a01b03166105b6565b61014e6105c8565b61014e6004803603602081101561020d57600080fd5b50356105ce565b61014e6004803603602081101561022a57600080fd5b50356106ff565b6101c76004803603602081101561024757600080fd5b5035610931565b61014e610a67565b6102736004803603602081101561026c57600080fd5b5035610a6e565b6040805196875260208701959095528585019390935260608501919091526001600160a01b0390811660808501521660a0830152519081900360c00190f35b61033e600480360360808110156102c857600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156102ff57600080fd5b82018360208201111561031157600080fd5b8035906020019184600183028401116401000000008311171561033357600080fd5b509092509050610ab1565b60408051938452602084019290925282820152519081900360600190f35b6101c76004803603602081101561037257600080fd5b503560ff166110b2565b61014e6004803603602081101561039257600080fd5b5035611130565b61014e600480360360408110156103af57600080fd5b50803590602001356111ca565b6101c7600480360360208110156103d257600080fd5b503560ff166111f7565b61014e600480360360208110156103f257600080fd5b503560ff16611253565b61014e6004803603602081101561041257600080fd5b5035611265565b610185611278565b61014e6004803603602081101561043757600080fd5b5035611287565b600061046161271061045b6000548561156d90919063ffffffff16565b906115d2565b92915050565b600061046161047583611130565b670de0b6b3a76400009061163c565b7391e0cda1a8a114a6f92551b63fc8b37645a0839081565b6001546001600160a01b031633146104e55760405162461bcd60e51b81526004018080602001828103825260228152602001806118116022913960400191505060405180910390fd5b6001600081905260036020527fa15bc60c955c405d20d9149c709e2460f1c2d9a497496a7f46004d1772c3054c541580159061054a5750426003600083600181111561052d57fe5b600181111561053857fe5b81526020019081526020016000205411155b6105855760405162461bcd60e51b81526004018080602001828103825260238152602001806117c66023913960400191505060405180910390fd5b61058e8261168b565b600060038160015b60018111156105a157fe5b81526020810191909152604001600020555050565b60046020526000908152604090205481565b60005481565b600080610668837391e0cda1a8a114a6f92551b63fc8b37645a083906001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561063657600080fd5b505afa15801561064a573d6000803e3d6000fd5b505050506040513d602081101561066057600080fd5b5051906116ad565b90506106f87391e0cda1a8a114a6f92551b63fc8b37645a083906001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106ba57600080fd5b505afa1580156106ce573d6000803e3d6000fd5b505050506040513d60208110156106e457600080fd5b505161045b83670de0b6b3a764000061156d565b9392505050565b600061070961175a565b50600082815260026020818152604092839020835160c08101855281548152600182015492810192909252918201549281018390526003820154606082015260048201546001600160a01b03908116608083015260059092015490911660a0820152904210156107c0576040805162461bcd60e51b815260206004820152601f60248201527f466c61736850726f746f6c3a3a205354414b455f4e4f545f4558504952454400604482015290519081900360640190fd5b805160808201516001600160a01b03166000908152600460205260409020546107e89161163c565b6080820180516001600160a01b0390811660009081526004602081815260408084209690965586518984526002808352878520858155600181018690559081018590556003810185905580840180546001600160a01b03199081169091556005909101805490911690559451865163a9059cbb60e01b81529416918401919091526024830184905293519295507391e0cda1a8a114a6f92551b63fc8b37645a083909363a9059cbb93604480850194929391928390030190829087803b1580156108b157600080fd5b505af11580156108c5573d6000803e3d6000fd5b505050506040513d60208110156108db57600080fd5b50506080810151815160408051868152602081019290925280516001600160a01b03909316927f2ce17f91452598d1f926f6cfe29a9d42a67ff82b45d1eb94e0634c27555c14da9281900390910190a250919050565b6001546001600160a01b0316331461097a5760405162461bcd60e51b81526004018080602001828103825260228152602001806118116022913960400191505060405180910390fd5b600080805260036020527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff54158015906109dd575042600360008360018111156109c057fe5b60018111156109cb57fe5b81526020019081526020016000205411155b610a185760405162461bcd60e51b81526004018080602001828103825260238152602001806117c66023913960400191505060405180910390fd5b6107d0821115610a595760405162461bcd60e51b81526004018080602001828103825260238152602001806117a36023913960400191505060405180910390fd5b600082815560038180610596565b6203f48081565b6002602081905260009182526040909120805460018201549282015460038301546004840154600590940154929493919290916001600160a01b03908116911686565b6000806000808811610b0a576040805162461bcd60e51b815260206004820152601e60248201527f466c61736850726f746f636f6c3a3a20494e56414c49445f414d4f554e540000604482015290519081900360640190fd5b6001600160a01b038616301415610b68576040805162461bcd60e51b815260206004820152601f60248201527f466c61736850726f746f636f6c3a3a20494e56414c49445f4144445245535300604482015290519081900360640190fd5b33610b72896116fb565b881115610bb05760405162461bcd60e51b81526004018080602001828103825260288152602001806117e96028913960400191505060405180910390fd5b6000610bbc428a6116ad565b604080516323b872dd60e01b81526001600160a01b0385166004820152306024820152604481018d905290519192507391e0cda1a8a114a6f92551b63fc8b37645a08390916323b872dd916064808201926020929091908290030181600087803b158015610c2957600080fd5b505af1158015610c3d573d6000803e3d6000fd5b505050506040513d6020811015610c5357600080fd5b50506001600160a01b038216600090815260046020526040902054610c78908b6116ad565b60046000846001600160a01b03166001600160a01b0316815260200190815260200160002081905550898989844260405160200180868152602001858152602001846001600160a01b031660601b8152601401836001600160a01b031660601b81526014018281526020019550505050505060405160208183030381529060405280519060200120925060006001600160a01b03166002600085815260200190815260200160002060040160009054906101000a90046001600160a01b03166001600160a01b031614610d92576040805162461bcd60e51b815260206004820152601c60248201527f466c61736850726f746f636f6c3a3a205354414b455f45584953545300000000604482015290519081900360640190fd5b610d9c8a8a6111ca565b9450610da78561043e565b93507391e0cda1a8a114a6f92551b63fc8b37645a083906001600160a01b03166340c10f1989876040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610e1457600080fd5b505af1158015610e28573d6000803e3d6000fd5b505050506040513d6020811015610e3e57600080fd5b5050600154604080516340c10f1960e01b81526001600160a01b03909216600483015260248201869052517391e0cda1a8a114a6f92551b63fc8b37645a08390916340c10f199160448083019260209291908290030181600087803b158015610ea657600080fd5b505af1158015610eba573d6000803e3d6000fd5b505050506040513d6020811015610ed057600080fd5b50506040805160c0810182528b815260208181018c8152828401858152606084018a81526001600160a01b03808916608087019081528f821660a0880181815260008d8152600298899052999099209751885594516001880155925194860194909455516003850155516004840180549184166001600160a01b03199283161790559351600590930180549390921692909316919091179055610f729061171f565b1561104757876001600160a01b0316632cbff446848c8489878d8d6040518863ffffffff1660e01b815260040180888152602001878152602001868152602001858152602001846001600160a01b03168152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505098505050505050505050602060405180830381600087803b15801561101a57600080fd5b505af115801561102e573d6000803e3d6000fd5b505050506040513d602081101561104457600080fd5b50505b60408051848152602081018c90528082018b9052606081018390526080810187905290516001600160a01b03808b1692908516917f8872a0bfe035dd55f2341f67aa0f9a8196bb3f97e132b6d3cb2f53f91aaa93f99181900360a00190a35050955095509592505050565b6001546001600160a01b031633146110fb5760405162461bcd60e51b81526004018080602001828103825260228152602001806118116022913960400191505060405180910390fd5b6203f48042016003600083600181111561111157fe5b600181111561111c57fe5b815260208101919091526040016000205550565b600080610668837391e0cda1a8a114a6f92551b63fc8b37645a083906001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561119857600080fd5b505afa1580156111ac573d6000803e3d6000fd5b505050506040513d60208110156111c257600080fd5b50519061163c565b60006106f86a1a1601fc4ea7109e00000061045b6111e786611265565b6111f1878761156d565b9061156d565b6001546001600160a01b031633146112405760405162461bcd60e51b81526004018080602001828103825260228152602001806118116022913960400191505060405180910390fd5b6000196003600083600181111561111157fe5b60036020526000908152604090205481565b6000610461600261045b610475856105ce565b6001546001600160a01b031681565b600061129161175a565b50600082815260026020818152604092839020835160c0810185528154815260018201549281019290925291820154928101929092526003810154606083015260048101546001600160a01b03908116608084018190526005909201541660a083015233908114611349576040805162461bcd60e51b815260206004820152601e60248201527f466c61736850726f746f636f6c3a3a20494e56414c49445f5354414b45520000604482015290519081900360640190fd5b604082015160009061135b904261163c565b905060006113728460000151838660200151611725565b845190915081111561138057fe5b83516001600160a01b0384166000908152600460205260409020546113a49161163c565b6001600160a01b03841660009081526004602052604090205583516113c9908261163c565b60008781526002602081815260408084208481556001810185905592830184905560038301849055600480840180546001600160a01b0319908116909155600590940180549094169093558051630852cd8d60e31b8152928301869052519398507391e0cda1a8a114a6f92551b63fc8b37645a08390936342966c68936024808501948390030190829087803b15801561146257600080fd5b505af1158015611476573d6000803e3d6000fd5b505050506040513d602081101561148c57600080fd5b50506040805163a9059cbb60e01b81526001600160a01b03851660048201526024810187905290517391e0cda1a8a114a6f92551b63fc8b37645a083909163a9059cbb9160448083019260209291908290030181600087803b1580156114f157600080fd5b505af1158015611505573d6000803e3d6000fd5b505050506040513d602081101561151b57600080fd5b5050835160408051888152602081019290925280516001600160a01b038616927f2ce17f91452598d1f926f6cfe29a9d42a67ff82b45d1eb94e0634c27555c14da92908290030190a250505050919050565b60008261157c57506000610461565b8282028284828161158957fe5b04146106f8576040805162461bcd60e51b81526020600482015260136024820152724d4154483a3a204d554c5f4f564552464c4f5760681b604482015290519081900360640190fd5b6000808211611628576040805162461bcd60e51b815260206004820152601760248201527f4d4154483a3a204449564953494f4e5f42595f5a45524f000000000000000000604482015290519081900360640190fd5b600082848161163357fe5b04949350505050565b80820382811115610461576040805162461bcd60e51b81526020600482015260146024820152734d4154483a3a205355425f554e444552464c4f5760601b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b80820182811015610461576040805162461bcd60e51b81526020600482015260136024820152724d4154483a3a204144445f4f564552464c4f5760681b604482015290519081900360640190fd5b600061046161170983611265565b61045b6706f05b59d3b200006301e1338061156d565b3b151590565b600061175261173c83670de0b6b3a764000061156d565b61045b61174887610467565b6111f1888861156d565b949350505050565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152509056fe466c61736850726f746f636f6c3a3a20494e56414c49445f4d415443485f524154494f466c61736850726f746f636f6c3a3a2046554e4354494f4e5f54494d454c4f434b4544466c61736850726f746f636f6c3a3a204d41585f5354414b455f504552494f445f45584345454453466c61736850726f746f636f6c3a3a204e4f545f4d415443485f5245434549564552a2646970667358221220a0829fbbe06d2d68a819c2bc6ea4f19a77b45ba6d28dfa1460e994ad08d7119864736f6c634300060c0033";
