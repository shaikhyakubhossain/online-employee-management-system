"use client";
// import styles from "./body-container.module.scss";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Nav from "../Nav/nav.component";
import LeftMenu from "../LeftMenu/left-menu.component";
import TopLoading from "../TopLoading/top-loading.component";

import type { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type propsType = {
  children: React.ReactNode;
};

export default function BodyContainer(props: propsType): JSX.Element {

  const pathname = usePathname();

  const isLeftMenuOpen = useSelector(
    (state: RootState) => state.leftMenu.isOpen
  );
  const startLoading = useSelector(
    (state: RootState) => state.mainLoading.startLoading
  );

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  const handleMarginLeft = () => {
    if (pathname === "/" || pathname === "/Auth" || pathname === "/AboutUs" || pathname === "/ContactUs" || pathname === "/Help" || pathname === "/Credits" ) {
      return "0px";
    } else {
      if (isLeftMenuOpen) {
        return "0px";
      } else if (!isLeftMenuOpen && windowWidth && windowWidth < 1010) {
        return "0px";
      } else {
        return "240px";
      }
    }
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <TopLoading startLoading={startLoading} />
      <Nav />
      {pathname === "/" || pathname === "/Auth" || pathname === "/AboutUs" || pathname === "/ContactUs" || pathname === "/Help" || pathname === "/Credits" ? null : <LeftMenu screenSize={windowWidth} />}
      <div
        className={`mt-20 ${
          pathname === "/" || pathname === "/Auth" ? "" : "p-9"
        }`}
        style={{
          marginLeft: handleMarginLeft(),
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
