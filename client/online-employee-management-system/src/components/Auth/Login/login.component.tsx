import Link from "next/link";
import Button from "@/components/Button/button.component";

type propsType = {
  searchParams: searchParamsType
}

type searchParamsType = {
  role: string
}

export default function Login(props: propsType) {
  return (
    <div className="">
      <div>Back</div>
      <div>
        <div>{props.searchParams.role} Login</div>
        <div>
          <div className="bg:white rounded">
            <div>{props.searchParams.role} ID</div>
            <input type="text" />
          </div>
          <div>
            <div>Password</div>
            <input type="text" />
          </div>
          <div>
            <Button>Enter</Button>
          </div>
        </div>
        <div>
          Do not have an account ? Click here to 
          <Link href={"/Auth?type=signup&role=Admin"}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}
