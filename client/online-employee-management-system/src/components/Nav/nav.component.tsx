import styles from "./nav.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <div
      className={`${styles.mainContainer} fixed top-0 left-0 right-0 flex justify-between h-20 text-white font-bold`}
    >
      <Link href={"/"}>
        <div className="text-center text-xl px-6">
          <div className="text-3xl">OMS</div>
          <div>Employee</div>
        </div>
      </Link>
      <div className={`${styles.middle} flex`}>
        <div>
          <Link href={"/Dashboard"}>
            <div>Dashboard</div>
          </Link>
        </div>
        <div>
          <Link href={"/Notice"}>
            <div>Notice</div>
          </Link>
        </div>
        <div>
          <Link href={"/Apply-for-leave"}>
            <div>Apply for leave</div>
          </Link>
        </div>
        <div>
          <Link href={"/Access-Asset"}>
            <div>Access/Asset</div>
          </Link>
        </div>
        <div>
          <Link href={"/Salary-Slip"}>
            <div>Salary Slip</div>
          </Link>
        </div>
        <div>
          <Link href={"/Chat"}>
            <div>Chat</div>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}
