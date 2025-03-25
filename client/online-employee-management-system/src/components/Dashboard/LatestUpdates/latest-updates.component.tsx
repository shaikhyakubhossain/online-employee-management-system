import styles from "./latest-updates.module.scss";
import type { noticeData } from "@/constants/Types/response-data";

type propsType = {
  noticeData: noticeData[] | null;
};

export default function LatestUpdates(props: propsType) {

    console.log(props.noticeData)
  return (
    <div
      className="w-1/2 max-[743px]:w-full p-7 mr-7 rounded-lg h-60"
      style={{ background: "#F3F3F3" }}
    >
      <div className="flex justify-between font-semibold">
        <div className="text-xl">Notice Board</div>
        <div></div>
      </div>
      <div
        className={`${styles.subContainer} text-sm font-semibold h-40 overflow-y-auto`}
      >
        {
            props.noticeData?.map((item) => {
                return (<div key={item.noticeId} className="flex justify-start items-center my-5 border-b-2 py-4 border-gray-400">
                    <div>{item.title}&nbsp;{"-"}</div>
                    <div>&nbsp;{item.message}</div>
                  </div>)
            })
        }
        
      </div>
    </div>
  );
}
