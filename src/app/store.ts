import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import thunk from 'redux-thunk';
import { api } from './api';

const middlewares = [thunk, api.middleware];

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: new MiddlewareArray().concat(middlewares),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
