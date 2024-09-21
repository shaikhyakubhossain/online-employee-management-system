"use client"
// import styles from './right-container.module.scss';
import { useEffect, useState } from 'react';
import UserOptions from '../UserOptions/user-options.component';
import AuthOptions from '../AuthOptions/auth-options.component';

import { RootState } from '@/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { setDetail } from '@/lib/features/AuthDetail/authDetailSlice';

export default function RightContainer() {

    const dispatch = useDispatch();

    const [path, setPath] = useState<null | string>(null);

    const {token} = useSelector((state: RootState) => state.authDetail);
    const {data} = useSelector((state: RootState) => state.authDetail);

    useEffect (() => {
        const authDetail = localStorage.getItem("authDetail");
        if(authDetail){
            dispatch(setDetail(JSON.parse(authDetail)));
        }

        setPath(window.location.pathname);
    }, [])

    return (
        <div>
            {
                token ?
                <UserOptions firstName={data?.firstName} shortName={data && data.firstName[0] + data.lastName[0]} />
                :
                path === "/" || path === "/Auth" ?
                <AuthOptions />
                :
                null
                
            }
        </div>
    )
}