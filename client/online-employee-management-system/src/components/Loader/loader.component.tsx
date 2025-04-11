type propsType = {
    title: string;
};

export default function Loader(props: propsType): JSX.Element {
    return (
        <div className="text-center text-2xl font-semibold">{props.title}</div>
    );
}