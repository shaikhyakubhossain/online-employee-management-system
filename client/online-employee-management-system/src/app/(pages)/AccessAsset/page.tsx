import MainBody from "@/components/AccessAsset/MainBody/main-body.component";
import PageHeader from "@/components/PageHeader/page-header.component";

export default function AccessAssetPage(): JSX.Element {
  return (
    <div className="font-times">
      <PageHeader title="Access/Asset" />
      <MainBody />
    </div>
  );
}
