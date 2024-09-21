"use client";
import styles from './greeting.module.scss';

import { RootState } from '@/lib/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Greeting(): JSX.Element {

    const {data} = useSelector((state: RootState) => state.authDetail);

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <div className={`${styles.greeting} font-bold text-4xl`}>Hello {data?.designation}&nbsp;{data?.firstName} 👋</div>
    )
}