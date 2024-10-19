type propsType = {
  updateTitle: (data: string) => void;
  updateMessage: (data: string) => void;
  handleAddNotice: () => void;
};

export default function AddNotice(props: propsType) {
  return (
    <div className="">
      <div>
        <div className="text-2xl">Add Notice</div>
        <input
          className="border-2 border-black m-2 rounded-md bg-red-100"
          onChange={(event) => props.updateTitle(event.target.value)}
          type="text"
          placeholder="Title"
        />
        <br />
        <textarea
          className="border-2 border-black rounded-md bg-red-100 m-2 w-full h-28"
          onChange={(event) => props.updateMessage(event.target.value)}
          placeholder="Body"
        />
      </div>
      <div className="text-lg my-6">
        <span
          onClick={props.handleAddNotice}
          className="text-red-500 bg-slate-200 p-3 rounded-lg cursor-pointer hover:bg-slate-300"
        >
          submit
        </span>
      </div>
    </div>
  );
}
