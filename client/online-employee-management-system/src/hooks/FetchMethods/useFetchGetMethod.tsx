"use client";
import { useEffect } from "react";
import { getUrl } from "@/constants/url";

import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setStartLoadingTrue,
  setStartLoadingFalse,
} from "@/lib/features/MainLoading/mainLoadingSlice";

const useFetchGetMethod = (
  endpoint: string,
  role: string,
  callback: (data:  null) => void,
  shouldReverse: boolean = false,
  page?: number
) => {
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.authDetail.token);

  const fetchData = async () => {
    fetch(`${getUrl()}/${endpoint}${page ? `?page=${page}` : ""}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        role: role,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.data && shouldReverse){
          const reverse = data.data.reverse();
          callback(reverse); 
        }
        else{
          callback(data.data);
          console.log(data);
        }
      })
      .finally(() => {
        dispatch(setStartLoadingFalse());
      });
  };

  useEffect(() => {
    dispatch(setStartLoadingTrue());
    fetchData();
  }, [page && page]);
};

export default useFetchGetMethod;
