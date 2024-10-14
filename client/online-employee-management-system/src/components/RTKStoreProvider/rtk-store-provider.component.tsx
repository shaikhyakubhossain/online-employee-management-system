"use client";
import styles from "./rtk-store-provider.module.scss";
import LoadingSpinner from "../LoadingSpinner/loading-spinner.component";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store } from "../../lib/store";

type propsType = {
  children: React.ReactNode;
};

export default function RTKStoreProvider(props: propsType): JSX.Element {

  const persistor = persistStore(store);

  return (
    <div className={styles.mainContainer}>
      <Provider store={store}>
        <PersistGate loading={<LoadingSpinner/>} persistor={persistor}>
        {props.children}
        </PersistGate>
      </Provider>
    </div>
  );
}
