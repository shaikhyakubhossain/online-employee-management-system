export default function MainBody(): JSX.Element {
  return (
    <div className="">
        <div className="text-2xl font-semibold mb-4">C language notes:</div>
        <div className="flex flex-wrap justify-center items-center">
            {
                [...Array(10)].map((_, index) => (
                    <iframe
                        key={index}
                        className="rounded-lg mx-auto my-5"
                        src="https://drive.google.com/file/d/1ZP6pRH-EyvyEhyeoKVowRXDVoGhB5v90/preview"
                        width="480"
                        height="640"
                        allow="autoplay"
                    ></iframe>
                ))
            }
        </div>
      
    </div>
  );
}
