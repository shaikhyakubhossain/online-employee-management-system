"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./left-menu.module.scss";
import Button from "@/components/Button/button.component";
import { btnList, btnList2 } from "@/constants/Basic/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { setTrue, setFalse } from "@/lib/features/LeftMenu/leftMenuSlice";
import { setDetail } from "@/lib/features/AuthDetail/authDetailSlice";

export default function LeftMenu(props: { screenSize: number | null }): JSX.Element {
  const router = useRouter();
  const { isOpen } = useSelector((state: RootState) => state.leftMenu);
  const { role } = useSelector((state: RootState) => state.authDetail);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const dispatch = useDispatch();
  const LeftMenuRef = useRef<HTMLDivElement>(null);

  const collapseLeftMenu = () => {
    LeftMenuRef.current?.classList.add("-translate-x-60");
    dispatch(setTrue());
  };

  const expandLeftMenu = () => {
    LeftMenuRef.current?.classList.remove("-translate-x-60");
    dispatch(setFalse());
  };

  const handleLogout = () => {
    localStorage.removeItem("OEMS-authDetail");
    dispatch(setDetail({ data: null, token: null }));
    router.push("/");
  };

  useEffect(() => {
    setWindowWidth(props.screenSize);
    if (props.screenSize && props.screenSize < 1010) {
      dispatch(setTrue());
    }
  }, [props.screenSize]);

  return (
    <div>
      <div
        ref={LeftMenuRef}
        className={`${styles.leftContainer} ${
          isOpen ? "-translate-x-60" : "translate-x-0"
        } fixed top-20 left-0 bottom-0 w-60 shadow-2xl bg-white overflow-y-scroll transition-transform duration-300`}
      >
        <div className={`${styles.section1} mb-8 px-3 pt-7`}>
          {btnList.map((item, index): JSX.Element | undefined => {
            if (item.role === "both" || item.role === role) {
              return (
                <Link href={item.link} key={index} onClick={windowWidth && windowWidth < 1010 ? collapseLeftMenu : undefined}>
                  <Button
                    customClassName={styles.btn}
                    customTW="text-left w-full bg-white text-black font-medium"
                  >
                    <div className="flex">
                      <div className="my-auto mr-3">
                        <img className="w-4" src={item.base64Icon} alt="" />
                      </div>
                      <div className={`${styles.name} text-black`}>
                        {item.name}
                      </div>
                    </div>
                  </Button>
                </Link>
              );
            }
          })}
        </div>

        <div className={`${styles.section2} px-3`}>
          {}
          <Button
            customClassName={styles.btn}
            customTW="text-left w-full bg-white text-black font-medium"
            onClick={handleLogout}
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
      <div
        className={`${styles.openBtn} ${
          isOpen ? "block" : "hidden"
        } fixed top-40 left-0 z-10`}
      >
        <Button
          onClick={expandLeftMenu}
          customClassName={styles.btn}
          customTW="text-left w-full bg-white text-black font-medium"
        >
          <div className="flex my-auto rotate-180">
            <img src={btnList2[1].base64Icon} alt="" />
            <img src={btnList2[1].base64Icon} alt="" />
          </div>
        </Button>
      </div>
    </div>
  );
}
