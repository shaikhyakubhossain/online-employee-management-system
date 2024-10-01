'use client';
import { configureStore } from "@reduxjs/toolkit";
import leftMenuSlice from "./features/LeftMenu/leftMenuSlice";
import authDetailSlice from "./features/AuthDetail/authDetailSlice";
import mainLoadingSlice from "./features/MainLoading/mainLoadingSlice";

export const store = configureStore({
    reducer: {
        leftMenu: leftMenuSlice,
        authDetail: authDetailSlice,
        mainLoading: mainLoadingSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch