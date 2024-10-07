import Login from "@/components/Auth/Login/login.component";
import SignUp from "@/components/Auth/SignUp/signup.component";

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
      <img
        className="absolute top-0 left-0 w-full -z-10"
        style={{ height: "88.5dvh" }}
        src={`https://drive.google.com/thumbnail?id=1BjLxXodycVILUUQ4rKuaNdcWVFqGG085`}
        alt=""
      />
      {props.searchParams.type === "login" ? (
        <Login searchParams={props.searchParams} />
      ) : (
        <SignUp searchParams={props.searchParams} />
      )}
    </div>
  );
}
