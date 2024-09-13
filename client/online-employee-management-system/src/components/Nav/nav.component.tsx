import styles from "./nav.module.scss";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className={`${styles.mainContainer} flex justify-between bg-blue-700 h-20`}>
            <div>
                <div>OMS</div>
                <div>Employee</div>
            </div>
            <div>
                <Link href={"/Dashboard"}><div>Dashboard</div></Link>
                <Link href={"/Chat"}><div>Chat</div></Link>
            </div>
            <div></div>
        </div>
    )
}