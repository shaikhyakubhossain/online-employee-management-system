"use client";
import styles from "./hero-content.module.scss";
import { btnList } from "@/constants/Basic/data";
import HeroCard from "@/components/Dashboard/HeroCard/hero-card.component";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function HeroContent(): JSX.Element {

    const { role } = useSelector((state: RootState) => state.authDetail);

    return (
        <div className={`${styles.mainContainer} grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {
                btnList.map((item, index) => {
                    return ( (item.role === role || item.role === "both") && item.name !== "Dashboard" &&
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