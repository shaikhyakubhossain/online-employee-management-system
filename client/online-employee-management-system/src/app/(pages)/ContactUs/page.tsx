import PageHeader from "@/components/PageHeader/page-header.component";
import Link from "next/link";
import { btnList2 } from "@/constants/Basic/data";
import ContactComponent from "@/components/Contact/contact.component";

export default function ContactUs() {
  return (
    <div className="font-times p-4 sm:p-6 lg:p-8 bg-gray-200 text-lg sm:text-xl">
      <PageHeader title="Contact Us" />

      <Link href={"/"}>
        <div className="text-lg sm:text-xl text-left fixed left-4 top-20 bg-white rounded-sm p-2 shadow-lg">
          <img
            className="w-5 h-5 sm:w-6 sm:h-6"
            src={btnList2[1].base64Icon}
            alt="Back"
          />
        </div>
      </Link>

      {/* Contact form component */}
      <div className="mt-6 sm:mt-8 max-w-md sm:max-w-3xl mx-auto">
        {" "}
        {/* Adjusted max width for smaller devices */}
        <ContactComponent />
      </div>
    </div>
  );
}
