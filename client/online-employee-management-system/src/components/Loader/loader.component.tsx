type propsType = {
    title: string;
};

export default function Loader(props: propsType): JSX.Element {
    return (
      <div className="mt-10 text-center text-2xl font-semibold text-blue-600">
        {props.title}
      </div>
    );
}