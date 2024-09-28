
export default function Table() {

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Employee name
            </th>
            <th scope="col" className="px-6 py-3">
              Regd.ID
            </th>
            <th scope="col" className="px-6 py-3">
              Email ID
            </th>
            <th scope="col" className="px-6 py-3">
              Leave type
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b cursor-pointer hover:bg-gray-100">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Soumya ranjan satapathy
            </th>
            <td className="px-6 py-4">324231</td>
            <td className="px-6 py-4">sranjan8144@gmail.com</td>
            <td className="px-6 py-4">Casual</td>
            <td className="px-6 py-4">12 sep - 15 sep 2024</td>
            <td className="px-6 py-4">
              <span className="text-green-900 bg-green-200 px-2 py-1 rounded-md mx-1 hover:bg-green-600 hover:text-white cursor-pointer">
                Approve
              </span>
              <span className="text-red-900 bg-red-200 px-2 py-1 rounded-md mx-1 hover:bg-red-600 hover:text-white cursor-pointer">
                Reject
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
