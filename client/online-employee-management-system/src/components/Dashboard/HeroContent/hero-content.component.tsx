import styles from "./hero-content.module.scss";
import { btnList } from "@/constants/Dashboard/data";
import HeroCard from "@/components/Dashboard/HeroCard/hero-card.component";

type propsType = {

}

export default function HeroContent(props: propsType): JSX.Element {
    return (
        <div className={`${styles.mainContainer} ml-60`}>
            {
                btnList.map((item, index) => {
                    return (
                        <HeroCard
                            key={index}
                            btnList={item}
                        />
                    )
                })
            }
        </div>
    )
}