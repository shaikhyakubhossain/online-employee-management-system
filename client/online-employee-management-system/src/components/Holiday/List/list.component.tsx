import type { Holiday } from "@/constants/Types/response-data";

type propsType = {
  holidays: Holiday[] | null;
};

export default function List(props: propsType) {
  const { holidays } = props;
  return (
    <div className="mb-8">
      {holidays?.map(
        (holiday, index): JSX.Element => (
          <div key={index} className="py-1">
            <strong>{new Date(holiday.date).toDateString()}:</strong>{" "}
            {holiday.localName}
          </div>
        )
      )}
    </div>
  );
}
