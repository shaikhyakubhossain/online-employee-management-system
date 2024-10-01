"use client";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setStartLoadingTrue, setStartLoadingFalse } from "@/lib/features/MainLoading/mainLoadingSlice";

export default function Loading() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setStartLoadingTrue());
        return () => {
            dispatch(setStartLoadingFalse());
        };
    }, []);
}
