import type { LeaveData } from "@/constants/Types/response-data";

type PropsType = {
  data: LeaveData[] | null;
  headers: string[];
  showAction?: boolean;
};

export default function Table(props: PropsType) {
  const { data, showAction = false } = props;

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            {props.headers.map((item, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item): JSX.Element => {
              return (
                <tr
                  key={item._id}
                  className="bg-white border-b cursor-pointer hover:bg-gray-100"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {item.firstName} {item.lastName}
                  </th>
                  <td className="px-6 py-4">{item.regdNo}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.designation}</td>
                  <td className="px-6 py-4">{item.leaveType}</td>
                  <td className="px-6 py-4">
                    {item.leaveDateFrom} - {item.leaveDateTo}
                  </td>
                  {showAction && (
                    <td className="px-6 py-4">
                      <span className="text-green-900 bg-green-200 px-2 py-1 rounded-md mx-1 hover:bg-green-600 hover:text-white cursor-pointer">
                        Approve
                      </span>
                      <span className="text-red-900 bg-red-200 px-2 py-1 rounded-md mx-1 hover:bg-red-600 hover:text-white cursor-pointer">
                        Reject
                      </span>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
