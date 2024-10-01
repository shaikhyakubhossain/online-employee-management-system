"use client";
import { createSlice} from '@reduxjs/toolkit';

interface mainLoadingStateType {
    startLoading: boolean
}

const initialState: mainLoadingStateType = {
    startLoading: false
}

export const mainLoadingSlice = createSlice({
    name: "mainLoading",
    initialState,
    reducers: {
        setStartLoadingTrue: (state) => {
            state.startLoading = true;
        },
        setStartLoadingFalse: (state) => {
            state.startLoading = false;
        },
        toggleStartLoading: (state) => {
            state.startLoading === true ? state.startLoading = false : state.startLoading = true;
        }
    }
});

export const {setStartLoadingTrue, setStartLoadingFalse, toggleStartLoading} = mainLoadingSlice.actions;

export default mainLoadingSlice.reducer;