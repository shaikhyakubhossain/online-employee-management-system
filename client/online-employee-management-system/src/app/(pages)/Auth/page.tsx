import Login from "@/components/Auth/Login/login.component";
import SignUp from "@/components/Auth/SignUp/signup.component";
import { MainBackgroundImg } from "@/components/Auth/MainBackgroundImg/main-background-img.component";
import Link from "next/link";
import { btnList2 } from "@/constants/Basic/data";

type propsType = {
  searchParams: searchParamsType;
};

type searchParamsType = {
  type: string;
  role: string;
};

export default function Auth(props: propsType) {
  return (
    <div
      className="relative text-white overflow-y-scroll"
      style={{ background: "rgba(20, 19, 112, 0.85)", height: "calc(100dvh - 80px)" }}
    >
      <MainBackgroundImg customTW="blur-sm" />
      <Link href={"/"}>
        <div className="text-xl text-left absolute left-0 bg-white rounded-sm p-2 m-4"><img className="w-6 h-6" src={btnList2[1].base64Icon} alt="" /></div>
      </Link>
      {props.searchParams.type === "login" ? (
        <Login searchParams={props.searchParams} />
      ) : (
        <SignUp searchParams={props.searchParams} />
      )}
    </div>
  );
}
