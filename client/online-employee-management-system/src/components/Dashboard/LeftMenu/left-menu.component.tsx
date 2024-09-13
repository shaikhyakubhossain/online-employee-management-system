import styles from "./left-menu.module.scss";
import Button from "@/components/Button/button.component";
import { btnList } from "@/constants/Dashboard/data";
import Link from "next/link";
import type { btnListType } from "@/constants/Dashboard/data";

type propsType = {

};

export default function LeftMenu(props: propsType): JSX.Element {
  return (
    <div
      className={`${styles.mainContainer} absolute top-20 bottom-0 w-60 shadow-2xl`}
    >
      {btnList.map((item, index): JSX.Element => {
        return (
            <Link href={item.link} key={index}>
              <Button
                customClassName={styles.btn}
                customTW="text-left w-full bg-white text-black font-medium">
                <img src={item.base64Icon} alt="" />
                <span className="text-black">{item.name}</span>
              </Button>
            </Link>
        );
      })}
    </div>
  );
}
