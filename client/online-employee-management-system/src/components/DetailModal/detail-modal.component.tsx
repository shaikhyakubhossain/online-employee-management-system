import type { employeeData } from "@/constants/Types/response-data";
import { btnList } from "@/constants/Basic/data";

type propsType = {
  data: employeeData | null;
  hide: () => void;
};
export default function DetailModal(props: propsType) {
  return (
    <div
      onClick={(e) => e.target === e.currentTarget && props.hide()}
      className="fixed top-0 left-0 flex justify-center items-center w-full h-full z-10 bg-[#00000060]"
      style={{ backdropFilter: "blur(5px)" }}
    >
      {props.data && (
        <div className="flex justify-between items-center w-3/4 h-3/4 p-4 z-20 bg-[#cbcafb] rounded-lg">
          <div className="flex flex-col justify-between items-center w-full h-full">
            <div className="flex justify-evenly items-center w-full bg-[#dcdbff] text-2xl">
              <div>
                {props.data.firstName}&nbsp;{props.data.lastName}
              </div>
              <div>{props.data.designation}</div>
              <div>{props.data.email}</div>
            </div>
            <div className="flex justify-evenly items-center w-full gap-3">
              <div className="flex flex-col justify-center items-center">
                <div className="bg-gray-400 rounded-full p-4">
                  <img
                    className="w-32 h-32 rounded-full"
                    src={btnList[7].base64Icon}
                    alt="profile"
                  />
                </div>
                <div>Employee Id:&nbsp;{props.data.employeeId}</div>
              </div>
              <div className="text-left text-lg">
                <div>
                  Name:&nbsp;{props.data.firstName}&nbsp;{props.data.lastName}
                </div>
                <div>Email:&nbsp;{props.data.email}</div>
                <div>Designation:&nbsp;{props.data.designation}</div>
                <div>RegdNo:&nbsp;{props.data.regdNo}</div>
                <div>Gender:&nbsp;{props.data.genderCode}</div>
              </div>
              {props.data.innovationScore && (
                <div className="text-left text-lg">
                  <div>InnovationScore:&nbsp;{props.data.innovationScore}</div>
                  <div>LeadershipScore:&nbsp;{props.data.leadershipScore}</div>
                  <div>ManagerRating:&nbsp;{props.data.managerRating}</div>
                  <div>OvertimeScore:&nbsp;{props.data.overtimeScore}</div>
                  <div>PerformanceScore:&nbsp;{props.data.performanceScore}</div>
                </div>
              )}
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
