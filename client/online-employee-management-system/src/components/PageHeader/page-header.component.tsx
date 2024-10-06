export default function PageHeader(props: { title: string }): JSX.Element {
    return (
        <div className="text-5xl mb-12 font-semibold border-b-2 border-gray-800 text-blue-900">{props.title}</div>
    )
}