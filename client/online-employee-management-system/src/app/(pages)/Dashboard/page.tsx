import LeftMenu from "@/components/Dashboard/LeftMenu/left-menu.component";
import { btnList } from "@/constants/Dashboard/data";

export default function Dashboard() {
  return (
    <div className="">
      <LeftMenu btnList={btnList}/>
    </div>
  )
}