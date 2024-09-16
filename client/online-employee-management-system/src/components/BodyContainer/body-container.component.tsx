"use client";
// import styles from "./body-container.module.scss";
import { usePathname } from "next/navigation";

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

  console.log(usePathname());

  return (
    <div
      className={`mt-20 ${pathname === "/" ? "" : "p-9"}`}
      style={{ marginLeft: !isLeftMenuOpen && pathname !== "/" ? "240px" : "0px" }}
    >
      {props.children}
    </div>
  );
};
