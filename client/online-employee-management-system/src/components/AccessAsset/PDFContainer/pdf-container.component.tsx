import LoadingSpinner from "@/components/LoadingSpinner/loading-spinner.component";

export default function PDFContainer(): JSX.Element {
  return (
    <div className=" relative bg-[url('')]">
      <LoadingSpinner />
      <iframe
        className="rounded-lg mx-auto my-5 "
        src="https://drive.google.com/file/d/1ZP6pRH-EyvyEhyeoKVowRXDVoGhB5v90/preview"
        width="280"
        height="280"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
