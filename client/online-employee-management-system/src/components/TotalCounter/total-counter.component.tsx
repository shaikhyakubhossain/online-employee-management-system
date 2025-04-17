type propsType = {
    title: string,
    pageCount: number | null,
 }

export default function TotalCounter(props: propsType) {
    return (
      <div className="text-2xl font-semibold mb-4">
        {props.title}:&nbsp;{props.pageCount}
      </div>
    );
}