"use client";
import styles from './sub-header-container.module.scss';
import LatestUpdates from '../LatestUpdates/latest-updates.component';
import Calender from '../Calender/calender.component';

// import { RootState } from '@/lib/store';
// import { useSelector } from 'react-redux';

export default function SubHeaderContainer(): JSX.Element {

    // const {role} = useSelector((state: RootState) => state.authDetail);

    return (
        <div className={`${styles.mainContainer} flex mb-7`}>
            {
                // role === "employee" && 
                <>
                <LatestUpdates />
                <Calender />
                </>
            }
        </div>
    )
}