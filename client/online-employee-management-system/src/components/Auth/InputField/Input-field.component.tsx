type propsType = {
    label: string,
    type: string,
    placeholder: string
    required?: boolean
};

export default function InputField(props: propsType): JSX.Element {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-left text-gray-700 text-sm font-bold mb-2">
          {props.label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type={props.type}
          placeholder={props.placeholder}
          required={props.required}
        />
      </div>
    </div>
  );
}
