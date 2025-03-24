import styles from "./hero-header.module.scss";
import { svgForHeroHeader } from "@/constants/Svg/svg";
import Greeting from "../Greeting/greeting.component";

type propsType = {
  title: string;
  message: string;
  showEmoji: boolean;
  greeting: string;
  showCurrentUserName: boolean;
  showSvg: boolean;
  swapTextLocation?: boolean;
};

export default function HeroHeader(props: propsType): JSX.Element {
  return (
    <div
      className={`${styles.mainContainer} flex justify-between ${props.swapTextLocation ? "flex-row-reverse" : ""} min-h-36 max-h-80 mb-7 pl-8 pr-24 rounded-2xl`}
    >
      <div className={`${styles.left} my-auto`}>
        <Greeting title={props.title} message={props.message} showEmoji={props.showEmoji} showCurrentUserName={props.showCurrentUserName} />
      </div>
      <div className={`${styles.right} flex my-auto relative`}>
        {props.showSvg && <div className={`${styles.svgs} ${ props.swapTextLocation ? "-left-14" : "-left-24"} -top-14`}>
          <img src={svgForHeroHeader[0].base64} alt="" />
        </div>}
        <div className="font-bold text-6xl my-auto welcome">{props.greeting}</div>
        {props.showSvg && <div className={`${styles.svgs} -right-16 -top-11`}>
          <img src={svgForHeroHeader[1].base64} alt="" />
        </div>}
      </div>
    </div>
  );
}
