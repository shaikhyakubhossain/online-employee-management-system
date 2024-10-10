import MainBody from "@/components/Holiday/MainBody/main-body.component";
import PageHeader from "@/components/PageHeader/page-header.component";
export default function HolidayPage() {
  return (
    <div className="font-times">
      <PageHeader title="Holiday List" />
      <MainBody />
    </div>
  );
}
