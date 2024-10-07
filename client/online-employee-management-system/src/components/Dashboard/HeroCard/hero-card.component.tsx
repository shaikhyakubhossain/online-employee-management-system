import styles from "./hero-card.module.scss";
import type { btnListType } from "@/constants/Basic/data";
import Link from "next/link";

type propsType = {
  btnList: btnListType;
};

export default function HeroCard(props: propsType): JSX.Element {

  return (
    <Link href={props.btnList.link}>
    <div className={`${styles.mainContainer} p-8 rounded-lg cursor-pointer`} style={{ backgroundColor: props.btnList.bg + "25"}}>
      <div className={`${styles.row1} mb-10`}>
        <div className="flex justify-between">
          <div className={`${styles.name} font-bold text-xl`} style={{ color: props.btnList.bg }}>{props.btnList.name}</div>
          <div>
            <img className="w-5" src={props.btnList.base64Icon} alt="" />
          </div>
        </div>
        <div>{props.btnList.detail}</div>
      </div>
      <div className={`${styles.row2}`}>
        <div className="text-xs text-slate-500">People Added</div>
        <div></div>
      </div>
    </div>
    </Link>
  );
}
