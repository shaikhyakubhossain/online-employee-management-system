import PDFContainer from "../PDFContainer/pdf-container.component";

type propsType = {
    title: string
}

export default function Section(props: propsType): JSX.Element {
    return (
        <div>
        <div className="text-2xl font-semibold my-4">{props.title}:</div>

        <div className="flex flex-wrap justify-evenly items-center">
            {
                [...Array(10)].map((_, index) => (
                    <PDFContainer key={index} />
                ))
            }
        </div>
        </div>
    )
}