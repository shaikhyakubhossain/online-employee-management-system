type propsType = {
  updateTitle: (data: string) => void;
  updateMessage: (data: string) => void;
  handleAddNotice: () => void;
};

export default function AddNotice(props: propsType) {
  return (
    <div className="px-4 py-6 sm:px-6 md:px-12 lg:px-24 xl:px-32 bg-gray-100 font-times">
      <div className="max-w-2xl mx-auto bg-white border border-red-100 shadow-md rounded-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-red-600">Add Notice</h1>

        <div className="space-y-4">
          <div>
            <label className="text-lg font-semibold text-gray-700">Title</label>
            <input
              className="w-full mt-1 border-2 border-red-200 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50"
              onChange={(event) => props.updateTitle(event.target.value)}
              type="text"
              placeholder="Enter notice title"
            />
          </div>

          <div>
            <label className="text-lg font-semibold text-gray-700">Body</label>
            <textarea
              className="w-full mt-1 border-2 border-red-200 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 h-32 resize-none"
              onChange={(event) => props.updateMessage(event.target.value)}
              placeholder="Enter notice body"
            />
          </div>
        </div>

        <div className="text-right">
          <button
            onClick={props.handleAddNotice}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300 shadow-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );

}
