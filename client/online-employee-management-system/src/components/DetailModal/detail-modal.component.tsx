import type { employeeData } from "@/constants/Types/response-data";
import { btnList } from "@/constants/Basic/data";
import { btnList2 } from "@/constants/Basic/data";

type propsType = {
  data: employeeData | null;
  additionalInfo?: string | null;
  hide: () => void;
};
export default function DetailModal(props: propsType) {

  // const dob = props.data?.dob?.split(" ");
  // const dateOfJoining = props.data?.dateOfJoining?.split(" ");

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && props.hide()}
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50 p-4 backdrop-blur-sm"
    >
      {props.data && (
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl p-6 max-w-4xl w-full relative">
          {/* Close Button */}
          <button
            onClick={props.hide}
            className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
          >
            <img src={btnList2[1].base64Icon} alt="close" className="w-6 h-6" />
          </button>

          {/* Left Panel - Profile */}
          <div className="flex flex-col justify-center items-center md:w-1/3 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-6">
            <div className="bg-gray-300 rounded-full p-2 shadow-md">
              <img
                className="w-32 h-32 rounded-full"
                src={btnList[7].base64Icon}
                alt="profile"
              />
            </div>
            {props.data.username && <p className="text-gray-500 text-sm mt-4">
              @{props.data.username}
            </p>}
            <h2 className="text-xl font-bold text-gray-800 mt-1">
              {props.data.firstName} {props.data.lastName}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {props.data.designation}
            </p>
          </div>

          {/* Right Panel - Info */}
          <div className="flex flex-col gap-3 md:w-2/3 md:pl-6 mt-4 md:mt-0">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Employee Details
            </h3>
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner space-y-3 text-sm sm:text-base">
              {[
                {
                  label: "Employee ID",
                  value: props.data.employeeId,
                },
                { label: "Regd No", value: props.data.regdNo },
                { label: "Email", value: props.data.email },
                { label: "Department", value: props.data.department },
                { label: "Employment Type", value: props.data.employmentType },
                {
                  label: "Work Experience",
                  value:
                    props.data.workExperience !== undefined &&
                    (props.data.workExperience > 1
                      ? `${props.data.workExperience} years`
                      : `${props.data.workExperience} year`),
                },
                { label: "Gender", value: props.data.genderCode },
              ].map(
                (item, idx) =>
                  item.value && (
                    <div
                      key={idx}
                      className="flex justify-between border-b last:border-none pb-1"
                    >
                      <span className="text-gray-600 font-medium">
                        {item.label}:
                      </span>
                      <span className="text-gray-800 font-semibold text-right">
                        {item.value}
                      </span>
                    </div>
                  )
              )}
              {[
                { label: "Date of Joining", value: props.data.dateOfJoining },
                { label: "Date of Birth", value: props.data.dob },
              ].map((item, idx) => {
                const shortDate = item.value?.split(" ");
                return (
                  <div
                    key={idx}
                    className="flex justify-between border-b last:border-none pb-1"
                  >
                    <span className="text-gray-600 font-medium">
                      {item.label}:
                    </span>
                    <span className="text-gray-800 font-semibold text-right">
                      {(shortDate &&
                        `${shortDate[0]} ${shortDate[1]} ${shortDate[2]} ${shortDate[3]}`) ||
                        "N/A"}
                    </span>
                  </div>
                );
              })}
            </div>
            {props.additionalInfo && <div className="bg-gray-100 p-4 rounded-lg shadow-inner space-y-3 text-sm sm:text-base">
              {props.additionalInfo}
            </div>}
          </div>
        </div>
      )}
    </div>
  );


}
