"use client";
import styles from './sub-header-container.module.scss';
import LatestUpdates from '../LatestUpdates/latest-updates.component';
import Calender from '../Calender/calender.component';
import type { noticeData } from '@/constants/Types/response-data';

// import { RootState } from '@/lib/store';
// import { useSelector } from 'react-redux';

type propsType = {
    noticeData: noticeData[] | null;
}

export default function SubHeaderContainer(props: propsType): JSX.Element {

    // const {role} = useSelector((state: RootState) => state.authDetail);

    return (
        <div className={`${styles.mainContainer} flex mb-7 max-[743px]:flex-col max-[743px]:gap-7`}>
            {
                // role === "employee" && 
                <>
                <LatestUpdates noticeData={props.noticeData} />
                <Calender />
                </>
            }
        </div>
    )
}