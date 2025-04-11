import PDFContainer from "../PDFContainer/pdf-container.component";
import type { gDriveFolderDataType } from "@/constants/Types/response-data";

type propsType = {
    title: string
    data: gDriveFolderDataType[] | null
}

export default function Section(props: propsType): JSX.Element {
    return (
        <div>
        <div className="text-2xl font-semibold my-4">{props.title}:</div>

        <div className="flex flex-wrap gap-3 justify-evenly items-center">
            {
                props.data && props.data.map((item, index) => (
                    <PDFContainer key={index} fileId={item.id} fileName={item.name} />
                ))
            }
        </div>
        </div>
    )
}