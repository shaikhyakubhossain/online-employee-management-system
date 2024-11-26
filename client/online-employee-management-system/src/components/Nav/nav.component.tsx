import styles from "./nav.module.scss";
import Link from "next/link";
import RightContainer from "./RightContainer/right-container.component";

export default function Nav() {
  return (
    <div
      className={`${styles.mainContainer} fixed top-0 left-0 right-0 flex justify-between items-center h-20 px-6 text-white font-bold`}
      style={{ fontFamily: "Lora, serif" }}
    >
      <Link href={"/"}>
        <div className="text-left text-3xl my-auto capitalize font-mono">
          <div className="text-xs"><span className="text-3xl">E</span>mployee</div>
          <div>Verse</div>
        </div>
      </Link>
      <RightContainer />
    </div>
  );
}
