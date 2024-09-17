import Link from "next/link";
import Button from "@/components/Button/button.component";
import InputField from "../InputField/Input-field.component";

type propsType = {
  searchParams: searchParamsType
}

type searchParamsType = {
  role: string
}

export default function Login(props: propsType) {
  return (
    <div className="text-center p-4">
      <div className="text-2xl text-left">Back</div>
      <div>
        <div className="text-3xl my-4">{props.searchParams.role} Login</div>
        <div className="bg-blue-300 w-96 rounded mx-auto p-10">
          <InputField label={props.searchParams.role + " ID"} type="text" placeholder={"Enter " + props.searchParams.role + " ID"}/>
          <InputField label={"Password"} type="password" placeholder={"Enter password"}/>
          <div className="mt-14">
            <Button>Enter</Button>
          </div>
        </div>
        <div>
          Do not have an account ? Click here to &nbsp;
          <Link className="text-blue-200" href={"/Auth?type=signup&role=Admin"}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}
