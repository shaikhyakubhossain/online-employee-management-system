"use client";
// import styles from "./body-container.module.scss";

import type { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

type propsType = {
  children: React.ReactNode;
};

export default function BodyContainer(props: propsType): JSX.Element {
  const isLeftMenuOpen = useSelector(
    (state: RootState) => state.leftMenu.isOpen
  );

  return (
    <div
      className="mt-20 p-9"
      style={{ marginLeft: !isLeftMenuOpen ? "240px" : "0px" }}
    >
      {props.children}
    </div>
  );
};
