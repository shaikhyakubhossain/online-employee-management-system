import PDFContainer from "../PDFContainer/pdf-container.component";
import type { gDriveFolderDataType } from "@/constants/Types/response-data";

type propsType = {
  title: string
  data: gDriveFolderDataType[] | null
}

export default function Section(props: propsType): JSX.Element {
  const placeholderCount = 10;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        {props.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {!props.data ? (
          Array.from({ length: placeholderCount }).map((_, index) => (
            <div
              key={index}
              className="w-[280px] h-[320px] mx-auto flex items-center justify-center border border-gray-300 rounded-lg bg-white text-blue-800 font-semibold"
            >
              Loading...
            </div>
          ))
        ) : props.data.length > 0 ? (
          props.data.map((item, index) => (
            <PDFContainer key={index} fileId={item.id} fileName={item.name} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 mt-10">
            No files available.
          </div>
        )}
      </div>
    </div>
  );
}
