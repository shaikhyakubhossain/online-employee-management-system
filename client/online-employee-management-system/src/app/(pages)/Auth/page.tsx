import Login from "@/components/Auth/Login/login.component";
import SignUp from "@/components/Auth/SignUp/signup.component";
import { MainBackgroundImg } from "@/components/Auth/MainBackgroundImg/main-background-img.component";

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
      className="relative text-white"
      style={{ background: "rgba(20, 19, 112, 0.85)", height: "88.5dvh" }}
    >
      <MainBackgroundImg customTW="blur-sm" />
      {props.searchParams.type === "login" ? (
        <Login searchParams={props.searchParams} />
      ) : (
        <SignUp searchParams={props.searchParams} />
      )}
    </div>
  );
}
