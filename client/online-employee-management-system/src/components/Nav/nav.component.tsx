import styles from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
    return (
        <div className={`${styles.mainContainer} fixed top-0 left-0 right-0 flex justify-between h-20 text-white font-bold`}>
            <div className="text-center text-xl px-6">
                <div className="text-3xl">OMS</div>
                <div>Employee</div>
            </div>
            <div className="flex">
                <Link href={"/Dashboard"}><div>Dashboard</div></Link>
                <Link href={"/Chat"}><div>Chat</div></Link>
            </div>
            <div></div>
        </div>
    )
}