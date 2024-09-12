import React from "react";
import styles from "./button.module.scss";

type propsType = {
  children: React.ReactNode,
  customTW?: string,
  customClassName?: string
  onClick?: () => void
}

const Button = (props: propsType): JSX.Element => {
    return (
      <div className={`${styles.mainContainer}`}>
        <button type="button" onClick={props.onClick} className={`${props.customClassName} bg-lime-500 hover:bg-green-300 text-white hover:text-stone-900 font-bold py-2 px-4 rounded m-0 ${props.customTW}`}>{props.children}</button>
      </div>
    );
}

export default Button;