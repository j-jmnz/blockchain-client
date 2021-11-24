import { api } from '../api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Block = {
  __typename?: 'Block';
  block_index: Scalars['Int'];
  hash: Scalars['String'];
  height: Scalars['Int'];
  time: Scalars['Int'];
};

export type BlockDetails = {
  __typename?: 'BlockDetails';
  bits: Scalars['Int'];
  block_index: Scalars['Int'];
  fee: Scalars['Int'];
  hash: Scalars['String'];
  height: Scalars['Int'];
  main_chain: Scalars['Boolean'];
  mrkl_root: Scalars['String'];
  n_tx: Scalars['Int'];
  next_block?: Maybe<Array<Scalars['String']>>;
  nonce?: Maybe<Scalars['String']>;
  prev_block: Scalars['String'];
  size: Scalars['Int'];
  time: Scalars['Int'];
  tx?: Maybe<Array<TxEntity>>;
  ver: Scalars['Int'];
  weight: Scalars['Int'];
};

export type InputsEntity = {
  __typename?: 'InputsEntity';
  index: Scalars['Int'];
  prev_out?: Maybe<PrevOutOrOutEntity>;
  script: Scalars['String'];
  sequence?: Maybe<Scalars['String']>;
  witness: Scalars['String'];
};

export type OutEntity = {
  __typename?: 'OutEntity';
  addr?: Maybe<Scalars['String']>;
  n: Scalars['Int'];
  script: Scalars['String'];
  spending_outpoints?: Maybe<Array<SpendingOutpointsEntity>>;
  spent: Scalars['Boolean'];
  tx_index?: Maybe<Scalars['Float']>;
  type: Scalars['Int'];
  value?: Maybe<Scalars['String']>;
};

export type PrevOutOrOutEntity = {
  __typename?: 'PrevOutOrOutEntity';
  addr: Scalars['String'];
  n: Scalars['Int'];
  script: Scalars['String'];
  spending_outpoints?: Maybe<Array<SpendingOutpointsEntity>>;
  spent: Scalars['Boolean'];
  tx_index?: Maybe<Scalars['Float']>;
  type: Scalars['Int'];
  value?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  block: BlockDetails;
  blocks: Array<Block>;
};


export type QueryBlockArgs = {
  hash: Scalars['String'];
};

export type SpendingOutpointsEntity = {
  __typename?: 'SpendingOutpointsEntity';
  n: Scalars['Int'];
  tx_index?: Maybe<Scalars['Float']>;
};

export type TxEntity = {
  __typename?: 'TxEntity';
  block_height: Scalars['Int'];
  block_index: Scalars['Int'];
  double_spend: Scalars['Boolean'];
  fee: Scalars['Int'];
  hash: Scalars['String'];
  inputs?: Maybe<Array<InputsEntity>>;
  lock_time: Scalars['Int'];
  out?: Maybe<Array<OutEntity>>;
  relayed_by: Scalars['String'];
  size: Scalars['Int'];
  time: Scalars['Int'];
  tx_index?: Maybe<Scalars['Float']>;
  ver: Scalars['Int'];
  vin_sz: Scalars['Int'];
  vout_sz: Scalars['Int'];
  weight: Scalars['Int'];
};

export type GetBlockQueryVariables = Exact<{
  hash: Scalars['String'];
}>;


export type GetBlockQuery = { __typename?: 'Query', block: { __typename?: 'BlockDetails', hash: string, ver: number, prev_block: string, mrkl_root: string, time: number, bits: number, next_block?: Array<string> | null | undefined, fee: number, nonce?: string | null | undefined, n_tx: number, size: number, block_index: number, main_chain: boolean, height: number, weight: number, tx?: Array<{ __typename?: 'TxEntity', hash: string, ver: number, vin_sz: number, vout_sz: number, size: number, weight: number, fee: number, relayed_by: string, lock_time: number, double_spend: boolean, time: number, block_index: number, block_height: number, tx_index?: number | null | undefined, inputs?: Array<{ __typename?: 'InputsEntity', witness: string, script: string, index: number, sequence?: string | null | undefined, prev_out?: { __typename?: 'PrevOutOrOutEntity', spent: boolean, script: string, addr: string, n: number, type: number, spending_outpoints?: Array<{ __typename?: 'SpendingOutpointsEntity', n: number }> | null | undefined } | null | undefined }> | null | undefined, out?: Array<{ __typename?: 'OutEntity', type: number, spent: boolean, n: number, script: string, addr?: string | null | undefined, value?: string | null | undefined, tx_index?: number | null | undefined, spending_outpoints?: Array<{ __typename?: 'SpendingOutpointsEntity', n: number }> | null | undefined }> | null | undefined }> | null | undefined } };

export type GetBlocksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBlocksQuery = { __typename?: 'Query', blocks: Array<{ __typename?: 'Block', hash: string, height: number, time: number, block_index: number }> };


export const GetBlockDocument = `
    query GetBlock($hash: String!) {
  block(hash: $hash) {
    hash
    ver
    prev_block
    mrkl_root
    time
    bits
    next_block
    fee
    nonce
    n_tx
    size
    block_index
    main_chain
    height
    weight
    tx {
      hash
      ver
      vin_sz
      vout_sz
      size
      weight
      fee
      relayed_by
      lock_time
      double_spend
      time
      block_index
      block_height
      inputs {
        witness
        script
        index
        prev_out {
          spent
          script
          spending_outpoints {
            n
          }
          addr
          n
          type
        }
        sequence
      }
      out {
        type
        spent
        spending_outpoints {
          n
        }
        n
        script
        addr
        value
        tx_index
      }
      tx_index
    }
  }
}
    `;
export const GetBlocksDocument = `
    query GetBlocks {
  blocks {
    hash
    height
    time
    block_index
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetBlock: build.query<GetBlockQuery, GetBlockQueryVariables>({
      query: (variables) => ({ document: GetBlockDocument, variables })
    }),
    GetBlocks: build.query<GetBlocksQuery, GetBlocksQueryVariables | void>({
      query: (variables) => ({ document: GetBlocksDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };


