import styles from "./right-side-notification-update-btn.module.scss";

export default function RightSideNotificationUpdateBtn(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} flex items-center`}>
            <div className="flex justify-left items-center w-20 h-10 bg-gray-300 rounded-full px-2 shadow-lg">
                <div className="w-6 h-6 bg-blue-700 rounded-full cursor-pointer"></div>
            </div>
            <div className="w-60 text-xl">Turn on notifications for latest updates .</div>
        </div>
    )
}