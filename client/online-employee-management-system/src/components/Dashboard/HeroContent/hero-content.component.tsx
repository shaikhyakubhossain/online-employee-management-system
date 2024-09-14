import styles from "./hero-content.module.scss";
import { btnList } from "@/constants/Basic/data";
import HeroCard from "@/components/Dashboard/HeroCard/hero-card.component";

export default function HeroContent(): JSX.Element {
    return (
        <div className={`${styles.mainContainer} grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {
                btnList.map((item, index) => {
                    return ( index !== 0 &&
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