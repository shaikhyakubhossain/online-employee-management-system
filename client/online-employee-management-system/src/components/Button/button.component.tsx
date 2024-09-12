import React from "react";
import styles from "./button.module.scss";

type propsType = {
  children: React.ReactNode,
  customTW?: string,
  onClick?: () => void
}

const Button = (props: propsType): JSX.Element => {
    return (
      <div className={`${styles.mainContainer}`}>
        <button type="button" onClick={props.onClick} className={`text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${props.customTW}`}>{props.children}</button>
      </div>
    );
}

export default Button;