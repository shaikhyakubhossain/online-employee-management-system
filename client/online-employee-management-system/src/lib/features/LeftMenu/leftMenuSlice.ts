"use client";
import { createSlice} from '@reduxjs/toolkit';

interface leftMenuStateType {
    isOpen: boolean
}

const initialState: leftMenuStateType = {
    isOpen: false
}

export const leftMenuSlice = createSlice({
    name: "leftMenu",
    initialState,
    reducers: {
        setTrue: (state) => {
            state.isOpen = true;
        },
        setFalse: (state) => {
            state.isOpen = false;
        },
        toggle: (state) => {
            state.isOpen === true ? state.isOpen = false : state.isOpen = true;
        }
    }
})

export const {setTrue, setFalse, toggle} = leftMenuSlice.actions;

export default leftMenuSlice.reducer;