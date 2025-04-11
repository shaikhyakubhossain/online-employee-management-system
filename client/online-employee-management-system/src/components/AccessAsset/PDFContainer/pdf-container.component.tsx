import LoadingSpinner from "@/components/LoadingSpinner/loading-spinner.component";

type propsType = {
  fileId: string;
  fileName: string;
}

export default function PDFContainer(props: propsType): JSX.Element {
  return (
    <div className="relative bg-slate-200 text-center">
      <LoadingSpinner />
      <iframe
        className="rounded-lg mx-auto my-5 "
        src={`https://drive.google.com/file/d/${props.fileId}/preview`}
        width="280"
        height="280"
        allow="autoplay"
      ></iframe>
      <div>{props.fileName}</div>
    </div>
  );
}
