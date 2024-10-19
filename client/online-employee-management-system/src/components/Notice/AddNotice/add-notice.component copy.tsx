type propsType = {
  updateTitle: (data: string) => void;
  updateMessage: (data: string) => void;
  handleAddNotice: () => void;
};

export default function AddNotice(props: propsType) {
  return (
    <div className="">
      <div>
        <div className="text-2xl font-semibold text-red-500">Add Notice</div>
        <label className="text-lg font-semibold">Title:</label><br />
        <input
          className="border-2 p-2 shadow-xl shadow-slate-200 m-2 rounded-md bg-red-50"
          onChange={(event) => props.updateTitle(event.target.value)}
          type="text"
          placeholder="Title"
        />
        <br />
        <label className="text-lg font-semibold">Body:</label><br />
        <textarea
          className="border-2 p-2 shadow-xl shadow-slate-200 rounded-md bg-red-50 m-2 w-full h-28"
          onChange={(event) => props.updateMessage(event.target.value)}
          placeholder="Body"
        />
      </div>
      <div className="text-lg my-6">
        <span
          onClick={props.handleAddNotice}
          className="text-red-500 hover:text-red-200 bg-slate-200 p-3 rounded-lg cursor-pointer hover:bg-slate-600"
        >
          submit
        </span>
      </div>
    </div>
  );
}
