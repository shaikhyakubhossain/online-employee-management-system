"use client";
import { useRef } from "react";
import styles from "./left-menu.module.scss";
import Button from "@/components/Button/button.component";
import { btnList } from "@/constants/Dashboard/data";
import Link from "next/link";

export default function LeftMenu(): JSX.Element {
  const LeftMenuRef = useRef<HTMLDivElement>(null);

  const collapseLeftMenu = () => {
    LeftMenuRef.current?.classList.add("-translate-x-60");
  };

  return (
    <div
      ref={LeftMenuRef}
      className={`${styles.mainContainer} absolute top-20 bottom-0 w-60 shadow-2xl `}
    >
      <div>
        {btnList.map((item, index): JSX.Element => {
          return (
            <Link href={item.link} key={index}>
              <Button
                customClassName={styles.btn}
                customTW="text-left w-full bg-white text-black font-medium"
              >
                <img src={item.base64Icon} alt="" />
                <span className="text-black">{item.name}</span>
              </Button>
            </Link>
          );
        })}
      </div>

      <div>
        <Button
          customClassName={styles.btn}
          customTW="text-left w-full bg-white text-black font-medium"
        >
          <img src={""} alt="" />
          <span className="text-black">Logout</span>
        </Button>
        <Button
          onClick={collapseLeftMenu}
          customClassName={styles.btn}
          customTW="text-left w-full bg-white text-black font-medium"
        >
          <img src={""} alt="" />
          <span className="text-black">Collapse</span>
        </Button>
      </div>
    </div>
  );
}
