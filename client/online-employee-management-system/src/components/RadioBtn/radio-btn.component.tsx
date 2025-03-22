type propsType = {
  label: string;
  onRadioClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RadioBtn(props: propsType): JSX.Element {
  return (
    <div
      className={`flex items-center min-w-32 m-6 ps-4 border px-5 bg-gray-50 border-gray-200 rounded dark:border-gray-700`}
    >
      <label className="flex justify-between items-center w-full py-4 ms-2 text-sm font-medium dark:text-gray-900 text-gray-300">
      <div>
      <input
        type="radio"
        value=""
        onChange={props.onRadioClick}
        name="bordered-radio"
        className="block w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        </div>
        {props.label}
      </label>
    </div>
  );
}
