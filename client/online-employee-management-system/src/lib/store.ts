'use client';
import { configureStore } from "@reduxjs/toolkit";
import leftMenuSlice from "./features/LeftMenu/leftMenuSlice";
import authDetailSlice from "./features/AuthDetail/authDetailSlice";

export const store = configureStore({
    reducer: {
        leftMenu: leftMenuSlice,
        authDetail: authDetailSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch