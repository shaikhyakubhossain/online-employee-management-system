import MainBody from "@/components/Notice/MainBody/main-body.component";
import PageHeader from "@/components/PageHeader/page-header.component";

export default function Notice() {
  return (
    <div>
      <div className="flex max-[730px]:flex-col justify-between items-center max-[730px]:items-start font-times">
        <PageHeader title="Notice Board" />
      </div>
      <MainBody />
    </div>
  );
}
