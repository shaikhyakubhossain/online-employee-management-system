"use client";
import PageHeader from "@/components/PageHeader/page-header.component";
import { btnList2 } from "@/constants/Basic/data";
import { useRouter } from "next/navigation";

export default function TermsOfService() {
  const router = useRouter();
  return (
    <div className="font-times p-4 sm:p-6 lg:p-8 bg-gray-200 text-base sm:text-lg lg:text-xl">
      <PageHeader title="Terms of Service" />
      <div
        onClick={() => router.back()}
        className="text-base sm:text-lg fixed left-4 top-24 bg-white rounded-sm p-2 cursor-pointer"
      >
        <img className="w-6 h-6" src={btnList2[1].base64Icon} alt="Back" />
      </div>
      <p className="mt-4 text-base sm:text-lg lg:text-xl text-justify">
        Terms of Service for Employee Verse
      </p>
    </div>
  );
}
