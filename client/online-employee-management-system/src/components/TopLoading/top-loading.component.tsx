import styles from "./top-loading.module.scss";

type propsType = {
    startLoading: boolean;
};

export default function TopLoading(props: propsType) {

  return (
    <div className={`${styles.mainContainer} fixed top-0 w-10 h-1 bg-red-400 transition-all duration-[${props.startLoading ? "5000ms" : "0ms"}]`} style={{width: props.startLoading ? "100%" : "0%", display: props.startLoading ? "block" : "block"}}></div>
  )
}
