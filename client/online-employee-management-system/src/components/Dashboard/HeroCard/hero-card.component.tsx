import styles from "./hero-card.module.scss";
import type { btnListType } from "@/constants/Basic/data";

type propsType = {
  btnList: btnListType;
};

export default function HeroCard(props: propsType): JSX.Element {

  return (
    <div className={`${styles.mainContainer} p-8 rounded-lg cursor-pointer`} style={{ backgroundColor: props.btnList.bg + "30"}}>
      <div>
        <div className="flex justify-between">
          <div className={`${styles.name} font-bold text-xl`} style={{ color: props.btnList.bg }}>{props.btnList.name}</div>
          <div>
            <img className="w-5" src={props.btnList.base64Icon} alt="" />
          </div>
        </div>
        <div>{props.btnList.detail}</div>
      </div>
      <div></div>
    </div>
  );
}
