"use client";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setStartLoadingTrue, setStartLoadingFalse } from "@/lib/features/MainLoading/mainLoadingSlice";
import { setFalse } from "@/lib/features/LeftMenu/leftMenuSlice";

export default function Loading() {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Loading");
        dispatch(setStartLoadingTrue());
        window.innerWidth < 1010 && dispatch(setFalse());
        return () => {
            dispatch(setStartLoadingFalse());
        };
    }, []);
}
