import styles from "./latest-updates.module.scss";
import type { noticeData } from "@/constants/Types/response-data";

type propsType = {
  noticeData: noticeData[] | null;
};

export default function LatestUpdates(props: propsType) {

    console.log(props.noticeData)
  return (
    <div className="w-1/2 max-[743px]:w-full p-6 mr-7 rounded-2xl h-60 shadow-md bg-gray-100">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-bold text-gray-800">📝 Notice Board</h2>
      </div>

      <div
        className={`${styles.subContainer} text-sm font-medium h-40 overflow-y-auto pr-2`}
      >
        {props.noticeData ? (
          props.noticeData.map((item) => (
            <div
              key={item.noticeId}
              className="mb-4 pb-3 border-b border-gray-300 flex flex-col text-gray-700"
            >
              <span className="text-base font-semibold">{item.title}</span>
              <span className="text-sm mt-1 text-gray-600">{item.message}</span>
            </div>
          ))
        ) : (
          <div className="text-xl italic flex justify-center items-center h-full">
            Loading...
          </div>
        )}
      </div>
    </div>
  );


}
