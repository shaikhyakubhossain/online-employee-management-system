import styles from "./top-loading.module.scss";

type propsType = {
    startLoading: boolean;
};

export default function TopLoading(props: propsType) {

  return (
    <div className={`${styles.mainContainer} ${props.startLoading ? styles.mainContainerFullWidth : styles.mainContainerZeroWidth} fixed top-0 w-10 h-1 bg-red-400`}></div>
  )
}
