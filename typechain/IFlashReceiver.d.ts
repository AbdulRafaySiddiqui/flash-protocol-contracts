/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";

interface IFlashReceiverInterface extends ethers.utils.Interface {
  functions: {
    "receiveFlash(bytes32,uint256,uint256,uint256,address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "receiveFlash",
    values: [
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "receiveFlash",
    data: BytesLike
  ): Result;

  events: {};
}

export class IFlashReceiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IFlashReceiverInterface;

  functions: {
    receiveFlash(
      id: BytesLike,
      amountIn: BigNumberish,
      expireAfter: BigNumberish,
      mintedAmount: BigNumberish,
      staker: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "receiveFlash(bytes32,uint256,uint256,uint256,address,bytes)"(
      id: BytesLike,
      amountIn: BigNumberish,
      expireAfter: BigNumberish,
      mintedAmount: BigNumberish,
      staker: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  receiveFlash(
    id: BytesLike,
    amountIn: BigNumberish,
    expireAfter: BigNumberish,
    mintedAmount: BigNumberish,
    staker: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "receiveFlash(bytes32,uint256,uint256,uint256,address,bytes)"(
    id: BytesLike,
    amountIn: BigNumberish,
    expireAfter: BigNumberish,
    mintedAmount: BigNumberish,
    staker: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    receiveFlash(
      id: BytesLike,
      amountIn: BigNumberish,
      expireAfter: BigNumberish,
      mintedAmount: BigNumberish,
      staker: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "receiveFlash(bytes32,uint256,uint256,uint256,address,bytes)"(
      id: BytesLike,
      amountIn: BigNumberish,
      expireAfter: BigNumberish,
      mintedAmount: BigNumberish,
      staker: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    receiveFlash(
      id: BytesLike,
      amountIn: BigNumberish,
      expireAfter: BigNumberish,
      mintedAmount: BigNumberish,
      staker: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "receiveFlash(bytes32,uint256,uint256,uint256,address,bytes)"(
      id: BytesLike,
      amountIn: BigNumberish,
      expireAfter: BigNumberish,
      mintedAmount: BigNumberish,
      staker: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    receiveFlash(
      id: BytesLike,
      amountIn: BigNumberish,
      expireAfter: BigNumberish,
      mintedAmount: BigNumberish,
      staker: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "receiveFlash(bytes32,uint256,uint256,uint256,address,bytes)"(
      id: BytesLike,
      amountIn: BigNumberish,
      expireAfter: BigNumberish,
      mintedAmount: BigNumberish,
      staker: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
