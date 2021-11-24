import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('http://localhost:3001/graphql');

export const api = createApi({
    baseQuery: graphqlRequestBaseQuery({ client }),
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 180,
    endpoints: () => ({}),
});
