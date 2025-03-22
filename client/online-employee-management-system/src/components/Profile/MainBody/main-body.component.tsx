"use client";
import styles from "./main-body.module.scss";
import { RootState } from "@/lib/store";
import { useSelector, useDispatch } from "react-redux";
import { btnList, btnList2 } from "@/constants/Basic/data";
import { setDetail } from "@/lib/features/AuthDetail/authDetailSlice";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/button.component";

export default function MainBody(): JSX.Element {
  const { data } = useSelector((state: RootState) => state.authDetail);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
      localStorage.removeItem("OEMS-authDetail");
      dispatch(setDetail({ data: null, token: null }));
      router.push("/");
    };

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl p-6 max-w-3xl w-full">
        <div className="flex flex-col items-center md:w-1/3 md:border-r md:pr-6 mb-4 md:mb-0">
          <div className="bg-gray-300 rounded-full p-4">
            <img
              className="w-32 h-32 rounded-full"
              src={btnList[7].base64Icon}
              alt="profile"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            {data?.firstName} {data?.lastName}
          </h2>
          <p className="text-gray-500 text-sm">@{data?.username}</p>
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Profile Information
          </h3>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            {[
              { label: "Employee ID", value: data?.employeeId },
              { label: "Email", value: data?.email },
              { label: "Designation", value: data?.designation },
              { label: "Regd No", value: data?.regdNo },
              { label: "Gender", value: data?.genderCode },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-2 border-b last:border-none"
              >
                <span className="text-gray-600 font-medium">{item.label}:</span>
                <span className="text-gray-800 font-semibold">
                  {item.value || "N/A"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Button
          customClassName={styles.btn}
          customTW="w-full bg-white text-black font-medium shadow-md rounded-lg py-3"
          onClick={handleLogout}
        >
          <div className="flex items-center justify-center">
            <img
              src={btnList2[0].base64Icon}
              alt="logout-icon"
              className="w-5 h-5 mr-3"
            />
            <span className="text-black">Logout</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
