export default function PDFContainer(): JSX.Element {
  return (
    <div>
      <iframe
        className="rounded-lg mx-auto my-5"
        src="https://drive.google.com/file/d/1ZP6pRH-EyvyEhyeoKVowRXDVoGhB5v90/preview"
        width="480"
        height="640"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
