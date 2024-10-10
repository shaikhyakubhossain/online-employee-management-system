import FormContents from "@/components/ApplyForLeave/FormContents/form-contents.component";
import PageHeader from "@/components/PageHeader/page-header.component";

export default function ApplyForLeave() {
  return (
    <div className="font-times">
      <PageHeader title="Leave Application" />
      <FormContents />
    </div>
  );
}
