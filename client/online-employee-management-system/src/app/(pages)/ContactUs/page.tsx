import PageHeader from "@/components/PageHeader/page-header.component";
import Link from "next/link";
import { btnList2 } from "@/constants/Basic/data";

export default function ContactUs() {
  return (
    <div className="font-times p-8 bg-gray-200 text-xl">
      <PageHeader title="Contact Us" />
      <Link href={"/"}>
        <div className="text-xl text-left fixed left-4 top-24 bg-white rounded-sm p-2">
          <img className="w-6 h-6" src={btnList2[1].base64Icon} alt="" />
        </div>
      </Link>
    </div>
  );
}
