import Login from "@/components/Auth/Login/login.component";
import SignUp from "@/components/Auth/SignUp/signup.component";

type propsType = {
    searchParams: searchParamsType
}

type searchParamsType = {
    type: string
    role: string
}

export default function Auth(props: propsType) {
    return (
        <div className="text-white" style={{background: "rgba(20, 19, 112, 0.85)", height: "88.5dvh"}}>
           {
           props.searchParams.type === "login" ? <Login searchParams={props.searchParams} /> : <SignUp searchParams={props.searchParams} />
           }
        </div>
    )
}