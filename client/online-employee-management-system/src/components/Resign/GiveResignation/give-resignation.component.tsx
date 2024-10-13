export default function GiveResignation() {
  return (
    <div>
      <div className="text-3xl text-red-500 bg-slate-200 p-3 rounded-lg">
        Danger Zone
      </div>
      <div className="text-2xl">Reason for Resignation</div>
      <div>
        <textarea className="w-full h-40 border-2 border-red-500 rounded-lg p-1"></textarea>
      </div>
      <div className="text-lg text-red-600 my-6">
        <span className="bg-black hover:bg-white p-3 rounded-lg cursor-pointer border-2 border-red-500">
          Resign
        </span>
      </div>
    </div>
  );
}
