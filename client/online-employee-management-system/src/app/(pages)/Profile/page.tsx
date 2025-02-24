import PageHeader from "@/components/PageHeader/page-header.component";
import MainBody from "@/components/Profile/MainBody/main-body.component";

export default function Profile() {
  return (
    <div className="font-times">
      <PageHeader title="Profile" />
      <MainBody />
    </div>
  );
}
