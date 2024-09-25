"use client";
import { createSlice} from '@reduxjs/toolkit';
import type { authDetailDataType } from '../../../constants/Types/redux-state';

interface authDetailStateType {
    data: authDetailDataType | null,
    role: string | null,
    token: null | string;
    autoLogin: boolean
}

const initialState: authDetailStateType = {
    data: null,
    role: null,
    token: null,
    autoLogin: false
}

export const authDetailSlice = createSlice({
    name: "authDetail",
    initialState,
    reducers: {
        setDetail: (state, action) => {
            state.data = action.payload.data;
            state.role = action.payload.role;
            state.token = action.payload.token;
        },
        setAutoLogin: (state, action) => {
            state.autoLogin = action.payload;
        }
    }
})

export const {setDetail, setAutoLogin} = authDetailSlice.actions;

export default authDetailSlice.reducer;