import PDFContainer from "../PDFContainer/pdf-container.component";

export default function MainBody(): JSX.Element {
  return (
    <div className="">
        <div className="text-2xl font-semibold mb-4">C language notes:</div>
        <div className="flex flex-wrap justify-evenly items-center">
            {
                [...Array(10)].map((_, index) => (
                    <PDFContainer key={index} />
                ))
            }
        </div>
      
    </div>
  );
}
