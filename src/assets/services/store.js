import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { cocktailApi } from './cocktailApi';

export default configureStore({
    reducer: {
        [cocktailApi.reducerPath]: cocktailApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cocktailApi.middleware)
})