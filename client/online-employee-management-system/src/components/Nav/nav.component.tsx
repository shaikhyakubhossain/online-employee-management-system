import styles from "./nav.module.scss";
import Link from "next/link";
import RightContainer from "./RightContainer/right-container.component";

export default function Nav() {
  return (
    <div
      className={`${styles.mainContainer} fixed top-0 left-0 right-0 flex justify-between h-20 text-white font-bold`}
      style={{ fontFamily: "Lora, serif" }}
    >
      <Link href={"/"}>
        <div className="text-center text-xl px-6 my-auto">
          <div className="text-xl mt-2">DRIEMS</div>
          <div>Connect</div>
        </div>
      </Link>
      <RightContainer />
    </div>
  );
}
