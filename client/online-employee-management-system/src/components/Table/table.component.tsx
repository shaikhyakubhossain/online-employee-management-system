import type { defaultData } from "@/constants/Types/response-data";
import React from "react";

type PropsType = {
  data: defaultData[] | null;
  headers: string[];
  showAction?: boolean;
  isLeave?: boolean;
  handleAction?: (id: string, action: string) => void;
  handleRowDetailToShowInModal?:(row: defaultData) => void;
};

export default function Table(props: PropsType) {
  const { data, showAction = false, isLeave = false } = props;
  console.log("here: ", data);
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
                  onClick={() => props.handleRowDetailToShowInModal && props.handleRowDetailToShowInModal(item)}
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
                  { isLeave &&
                    <>
                      <td className="px-6 py-4">{item.leaveType}</td>
                      <td className="px-6 py-4">
                        {item.leaveDateFrom} - {item.leaveDateTo}
                      </td>
                    </>
                  }
                  {showAction && (
                    <>
                      <td className="px-6 py-4">{item.status}</td>
                      { item.status === "pending" && <td className="px-6 py-4">
                        <span
                          onClick={(event) => {
                            event.stopPropagation();
                            if (props.handleAction) {
                              props.handleAction(item._id, "approved");
                            }
                          }
                          }
                          className="text-green-900 bg-green-200 px-2 py-1 rounded-md mr-1 hover:bg-green-600 hover:text-white cursor-pointer"
                        >
                          Approve
                        </span>
                        <span
                          onClick={(event) => {
                            event.stopPropagation();
                            if (props.handleAction) {
                              props.handleAction(item._id, "rejected");
                            }
                          }
                          }
                          className="text-red-900 bg-red-200 px-2 py-1 rounded-md ml-1 hover:bg-red-600 hover:text-white cursor-pointer"
                        >
                          Reject
                        </span>
                      </td>}
                    </>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
