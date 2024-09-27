type propsType = {
    label: string
}

export default function SetDate(props: propsType) {
    return (
        <div className="mx-6">
            <label className="block my-2 text-lg font-medium text-gray-900 ">{props.label}</label>
            <input type="text"  className="w-24 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xl focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
    )
}