'use client';
import { configureStore } from "@reduxjs/toolkit";
import leftMenuSlice from "./features/LeftMenu/leftMenuSlice";
import authDetailSlice from "./features/AuthDetail/authDetailSlice";
import mainLoadingSlice from "./features/MainLoading/mainLoadingSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const reducer = combineReducers({
    leftMenu: leftMenuSlice,
    authDetail: authDetailSlice,
    mainLoading: mainLoadingSlice
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch