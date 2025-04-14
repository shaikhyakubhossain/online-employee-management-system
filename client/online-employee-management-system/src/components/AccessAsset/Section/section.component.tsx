import PDFContainer from "../PDFContainer/pdf-container.component";
import type { gDriveFolderDataType } from "@/constants/Types/response-data";

type propsType = {
    title: string
    data: gDriveFolderDataType[] | null
}

export default function Section(props: propsType): JSX.Element {
    return (
      <div className="p-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          {props.title}
        </h2>
        {!props.data ? (
          <div className="text-center text-blue-600 mt-10 font-2xl">
            Loading...
          </div>
        ) : props.data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {props.data.map((item, index) => (
              <PDFContainer key={index} fileId={item.id} fileName={item.name} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            No files available.
          </div>
        )}
      </div>
    );


}