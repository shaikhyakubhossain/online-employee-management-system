import PageHeader from "@/components/PageHeader/page-header.component";
import MainBody from "@/components/Attendance/MainBody/main-body.component";

export default function Attendance() {
    return (
        <div className="font-times">
            <PageHeader title="Attendance" />
            <MainBody />
        </div>
    );
}