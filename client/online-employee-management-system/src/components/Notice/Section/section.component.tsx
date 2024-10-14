import styles from "./section.module.scss";
import type { noticeData } from "@/constants/Types/response-data";

type propsType = {
    title: string;
    data: noticeData[] | null;
}

export default function Section(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} my-6`}>
            <div className={`${styles.sectionTitle} text-red-500 text-2xl font-semibold`}>{props.title}</div>
            <div className={`${styles.sectionBody}`}>
                {
                    props.data ? props.data.map((item) => (
                        <div className={`${styles.notice} flex text-blue-700 font-semibold my-4`} key={item.noticeId}>
                            <div className="text-2xl m-2">• {item.title}</div>
                            <div className="self-center m-2">{item.message}</div>
                        </div>
                    ))
                    :
                    <div>empty</div>
                }
            </div>
        </div>
    )
}