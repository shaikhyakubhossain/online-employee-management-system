import Link from "next/link";
import Button from "@/components/Button/button.component";

export default function Home() {
  return (
    <div className="relative text-white p-16" style={{background: "#14137000", height: "88.5dvh"}}>
      <img className="absolute top-0 left-0 w-full -z-10" style={{height: "88.5dvh", opacity: "2"}} src={`https://drive.google.com/thumbnail?id=1D2RLF-1Mf96RqWG_yd-_UyBnqDj--saU`} alt="" />
            <div className="text-6xl mb-24 w-3/4">
                <div>Employee verse</div>
                <div className="text-2xl mt-5">Efficiently manage your workforce with our streamlined platform. Our system offers an all-in-one solution for organizing employee details, tracking performance, managing payroll, and more. Whether you’re a small business or a large enterprise, our tool ensures that you can handle all employee-related tasks with ease.</div>
            </div>
            <div className="flex text-2xl">
            <div className="mr-4"><Link href={'/Auth?role=Admin'}><Button customTW="bg-blue-700 rounded-xl hover:bg-blue-400 hover:text-white px-8 py-4">Admin Login</Button></Link></div>
            <div className="ml-4"><Link href={'/Auth?role=Employee'}><Button customTW="bg-blue-700 rounded-xl hover:bg-blue-400 hover:text-white px-8 py-4">Employee Login</Button></Link></div>
            </div>
        </div>
  )
}
