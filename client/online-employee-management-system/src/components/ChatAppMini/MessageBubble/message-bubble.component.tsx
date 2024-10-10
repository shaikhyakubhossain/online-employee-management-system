import styles from "./message-bubble.module.scss";

type propsType = {
  message: string;
  sentBy: string | undefined;
  customTW?: string;
};

export default function MessageBubble(props: propsType): JSX.Element {
  let toggleColor;
  let toggleSide;

  if (props.sentBy === "you") {
    toggleColor = "bg-green-400";
    toggleSide = "justify-end";
  } else {
    toggleColor = "bg-blue-300";
    toggleSide = "justify-start";
  }

  return (
    <div
      className={`${styles.mainContainer} flex ${toggleSide} ${props.customTW}  text-left`}
    >
      <div
        className={`text-slate-800 ${toggleColor} rounded my-2 px-4 py-3 overflow-x-auto break-words`}
      >
        <div className={`text-sm text-left`}>{props.sentBy}</div>
        <div className={`text-2xl`}>{props.message}</div>
      </div>
    </div>
  );
}
