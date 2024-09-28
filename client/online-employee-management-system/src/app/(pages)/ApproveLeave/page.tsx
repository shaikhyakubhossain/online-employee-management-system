import SearchBox from "@/components/ApproveLeave/SearchBox/search-box.component";
import MainBody from "@/components/ApproveLeave/MainBody/main-body.component";

export default function ApproveLeave() {
    return (
        <div className="">
            <div className="text-5xl mb-12 font-semibold border-b-2 border-gray-800 text-blue-900">Approve Leave </div>
            <SearchBox />
            <MainBody />
        </div>
    )
}