"use client";
import { useRef } from "react";
import styles from "./left-menu.module.scss";
import Button from "@/components/Button/button.component";
import { btnList, btnList2 } from "@/constants/Basic/data";
import Link from "next/link";

// import { RootState } from "@/lib/store";
import { useDispatch } from "react-redux";
import { toggle } from "@/lib/features/LeftMenu/leftMenuSlice";

export default function LeftMenu(): JSX.Element {
  const dispatch = useDispatch();
  const LeftMenuRef = useRef<HTMLDivElement>(null);

  const collapseLeftMenu = () => {
    LeftMenuRef.current?.classList.add("-translate-x-60");
    dispatch(toggle());
  };

  return (
    <div
      ref={LeftMenuRef}
      className={`${styles.mainContainer} fixed top-20 bottom-0 w-60 shadow-2xl bg-white overflow-y-scroll transition-transform duration-700 ease-in-out`}
    >
      <div className={`${styles.section1} mb-8 px-3 pt-7`}>
        {btnList.map((item, index): JSX.Element => {
          return (
            <Link href={item.link} key={index}>
              <Button
                customClassName={styles.btn}
                customTW="text-left w-full bg-white text-black font-medium"
              >
                <div className="flex">
                  <div className="my-auto mr-3">
                    <img src={item.base64Icon} alt="" />
                  </div>
                  <div className={`${styles.name} text-black`}>{item.name}</div>
                </div>
              </Button>
            </Link>
          );
        })}
      </div>

      <div className={`${styles.section2} px-3`}>
        {}
        <Button
          customClassName={styles.btn}
          customTW="text-left w-full bg-white text-black font-medium"
        >
          <div className="flex">
            <div className="my-auto mr-3">
              <img src={btnList2[0].base64Icon} alt="" />
            </div>
            <div className="text-black">Logout</div>
          </div>
        </Button>
        <Button
          onClick={collapseLeftMenu}
          customClassName={styles.btn}
          customTW="text-left w-full bg-white text-black font-medium"
        >
          <div className="flex">
            <div className="text-black mr-5">Collapse</div>
            <div className="flex my-auto">
              <img src={btnList2[1].base64Icon} alt="" />
              <img src={btnList2[1].base64Icon} alt="" />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
