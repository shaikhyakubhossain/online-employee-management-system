import MainBody from "@/components/Calendar/MainBody/main-body.component";
import PageHeader from "@/components/PageHeader/page-header.component";

export default function Calendar(): JSX.Element {
  return (
    <div className="font-times">
      <PageHeader title="Calendar" />
      <MainBody />
    </div>
  );
}
