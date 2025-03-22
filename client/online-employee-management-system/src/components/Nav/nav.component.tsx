import styles from "./nav.module.scss";
import Link from "next/link";
import RightContainer from "./RightContainer/right-container.component";

export default function Nav() {
  return (
    <div
      className={`${styles.mainContainer} fixed top-0 left-0 right-0 flex justify-between items-center h-20 px-6 text-white text-2xl`}
    >
      <Link href={"/"}>
        <div>
          <img
            className="w-[182px] h-[83px] object-cover"
            src="https://s3-alpha-sig.figma.com/img/d644/c1c7/54af1fc9068714e8a816c1c73476a052?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XE1CwOrRG1TvfWjiSNgGc6XWLUwbK9csJQQHx6W498M7wIalJnAcnyaGmMIYe93O~BKLHiDoTwIfh8pPSOX5f36R4BSXSajCOn3YKjJuXk9-bAFRz9X3bChzuPhZku3zV~OAB5JVfyehI6MkPhUwb2e3BtXk8UBO5nCmbl-V5RvHb9I2DtqxfHcY8ilwJ2VdUHpgshPyVQTf9mrGXrgSLge5E3tWIuNBFp4UG9vFhGx4Njgoqs5YYgybOoCEeZwm2JX0saMUZX62YCXGEraLwNizszsYvidY65ItCK6v1IZChe5bvX-jFeu3ypmOUlomzE8vwB2uUnQmfOM8ymb34Q__"
            alt=""
          />
        </div>
      </Link>
      <RightContainer />
    </div>
  );
}
