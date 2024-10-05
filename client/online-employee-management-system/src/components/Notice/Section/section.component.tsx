import styles from "./section.module.scss";

type propsType = {
    title: string;
    // data: any;
}

export default function Section(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} my-6`}>
            <div className={`${styles.sectionTitle} text-red-500 text-2xl font-semibold`}>{props.title}</div>
            <div className={`${styles.sectionBody}`}>
                {
                    [...Array(2)].map((_, index) => (
                        <div className={`${styles.notice} text-blue-700 font-semibold my-4`} key={index}>
                            • Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </div>
                    ))
                }
            </div>
        </div>
    )
}