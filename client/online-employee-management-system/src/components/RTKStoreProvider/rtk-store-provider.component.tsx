"use client";
import styles from "./rtk-store-provider.module.scss";

import { Provider } from "react-redux";
import { store } from "../../lib/store";

type propsType = {
  children: React.ReactNode;
};

export default function RTKStoreProvider(props: propsType): JSX.Element {
  return (
    <div className={styles.mainContainer}>
      <Provider store={store}>{props.children}</Provider>
    </div>
  );
}
