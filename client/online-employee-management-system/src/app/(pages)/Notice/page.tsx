import MainBody from "@/components/Notice/MainBody/main-body.component";
import RightSideNotificationUpdateBtn from "@/components/Notice/RightSideNotificationUpdateBtn/right-side-notification-update-btn.component";
export default function Notice() {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="text-5xl mb-12 font-semibold border-b-2 border-gray-800 text-blue-900">Notice Board</div>
                <RightSideNotificationUpdateBtn />
            </div>
            <MainBody />
        </div>
    )
}