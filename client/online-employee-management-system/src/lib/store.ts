'use client';
import { configureStore } from "@reduxjs/toolkit";
import leftMenuSlice from "./features/LeftMenu/leftMenuSlice";

export const store = configureStore({
    reducer: {
        leftMenu: leftMenuSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch