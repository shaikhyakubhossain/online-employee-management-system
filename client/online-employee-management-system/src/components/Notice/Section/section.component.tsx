import styles from "./section.module.scss";
import type { noticeData } from "@/constants/Types/response-data";

type propsType = {
    title: string;
    data: noticeData[] | null;
}

export default function Section(props: propsType): JSX.Element {
   return (
     <div className={`${styles.mainContainer} my-6`}>
       {/* Section Title */}
       <div className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-2">
         📝 {props.title}
       </div>

       {/* Notices Body */}
       <div className={`${styles.sectionBody} grid gap-4`}>
         {props.data ? (
           props.data.map((item) => (
             <div
               key={item.noticeId}
               className="rounded-xl bg-white border border-gray-200 shadow-md p-5 hover:shadow-lg transition-all"
             >
               <div className="text-xl font-semibold text-indigo-600 mb-2">
                 {item.title}
               </div>
               <div className="text-gray-700 text-lg leading-relaxed">
                 {item.message}
               </div>
             </div>
           ))
         ) : (
           <div className="text-sm text-gray-500 italic text-center py-5">
             Loading...
           </div>
         )}
       </div>
     </div>
   );
}