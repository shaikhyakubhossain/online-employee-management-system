import styles from "./hero-card.module.scss";
import type { btnListType } from "@/constants/Basic/data";

type propsType = {
  btnList: btnListType;
};

export default function HeroCard(props: propsType): JSX.Element {
  return (
    <div className={`${styles.mainContainer}`}>
      <div>
        <div className="flex">
          <div>{props.btnList.name}</div>
          <div>
            <img src={props.btnList.base64Icon} alt="" />
          </div>
        </div>
        <div>{props.btnList.detail}</div>
      </div>
      <div></div>
    </div>
  );
}
