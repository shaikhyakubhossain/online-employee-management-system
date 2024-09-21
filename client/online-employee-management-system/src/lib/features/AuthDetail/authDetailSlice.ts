"use client";
import { createSlice} from '@reduxjs/toolkit';
import { authDetailDataType } from '../../../constants/Types/redux-state';

interface authDetailStateType {
    data: authDetailDataType | null,
    token: null | string;
}

const initialState: authDetailStateType = {
    data: null,
    token: null
}

export const authDetailSlice = createSlice({
    name: "authDetail",
    initialState,
    reducers: {
        setDetail: (state, action) => {
            state.data = action.payload.data;
            state.token = action.payload.token;
        }
    }
})

export const {setDetail} = authDetailSlice.actions;

export default authDetailSlice.reducer;