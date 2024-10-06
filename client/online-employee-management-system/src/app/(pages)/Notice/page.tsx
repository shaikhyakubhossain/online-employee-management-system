import MainBody from "@/components/Notice/MainBody/main-body.component";
import RightSideNotificationUpdateBtn from "@/components/Notice/RightSideNotificationUpdateBtn/right-side-notification-update-btn.component";
import PageHeader from "@/components/PageHeader/page-header.component";

export default function Notice() {
    return (
        <div>
            <div className="flex justify-between items-center">
                <PageHeader title="Notice Board" />
                <RightSideNotificationUpdateBtn />
            </div>
            <MainBody />
        </div>
    )
}