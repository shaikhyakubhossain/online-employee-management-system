"use client"
// import styles from './right-container.module.scss';
import { useEffect } from 'react';
import UserOptions from '../UserOptions/user-options.component';
import AuthOptions from '../AuthOptions/auth-options.component';

import { RootState } from '@/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { setDetail } from '@/lib/features/AuthDetail/authDetailSlice';

export default function RightContainer() {

    const dispatch = useDispatch();

    const {token} = useSelector((state: RootState) => state.authDetail);
    const {data} = useSelector((state: RootState) => state.authDetail);

    useEffect (() => {
        const authDetail = localStorage.getItem("authDetail");
        if(authDetail){
            dispatch(setDetail(JSON.parse(authDetail)));
        }
    }, [])

    return (
        <div>
            {
                token ?
                <UserOptions firstName={data?.firstName} shortName={data && data.firstName[0] + data.lastName[0]} />
                :
                window.location.pathname === "/" || window.location.pathname === "/Auth" ?
                <AuthOptions />
                :
                null
                
            }
        </div>
    )
}