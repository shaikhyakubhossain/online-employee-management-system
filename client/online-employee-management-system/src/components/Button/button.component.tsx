import React from "react";
import styles from "./button.module.scss";

type propsType = {
  children: React.ReactNode,
  customTW?: string,
  customClassName?: string,
  onClick?: (event : React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: propsType): JSX.Element => {
    return (
      <div className={`${styles.mainContainer}`}>
        <button type="button" onClick={props.onClick} className={`${props.customClassName} bg-blue-700 hover:bg-blue-500 text-white hover:text-stone-900 font-bold py-2 px-4 rounded m-0 ${props.customTW}`}>{props.children}</button>
      </div>
    );
}

export default Button;