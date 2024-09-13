import styles from "./hero-content.module.scss";
import { btnList } from "@/constants/Basic/data";
import HeroCard from "@/components/Dashboard/HeroCard/hero-card.component";

export default function HeroContent(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} grid gap-6`}>
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