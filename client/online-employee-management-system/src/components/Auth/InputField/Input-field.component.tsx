type propsType = {
  label: string;
  type: string;
  selectList?: string[];
  placeholder?: string;
  required?: boolean;
  updateDataToSend: (data: string) => void;
};

export default function InputField(props: propsType): JSX.Element {
  return (
    <div className="mb-4">
      <label className="block text-left text-gray-700 text-sm font-bold mb-2 capitalize">
        {props.label}
      </label>
      {props.type === "select" ? (
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name={props.label}
          required={props.required}
          onChange={(event) => props.updateDataToSend(event.target.value)}
        >
          <option value="" disabled selected hidden>
            {props.placeholder}
          </option>
          {props.selectList &&
            props.selectList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
        </select>
      ) : (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type={props.type}
          placeholder={props.placeholder}
          required={props.required}
          onChange={(event) => props.updateDataToSend(event.target.value)}
        />
      )}
    </div>
  );
}
