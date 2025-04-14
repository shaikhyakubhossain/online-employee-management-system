"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { btnList2 } from "@/constants/Basic/data";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="font-times p-4 sm:p-6 lg:p-8 bg-red-50 text-red-800 min-h-[80vh] flex items-center justify-center relative">
      <div
        onClick={() => router.back()}
        className="text-base sm:text-lg fixed left-4 top-24 bg-white rounded-sm p-2 cursor-pointer"
      >
        <img className="w-6 h-6" src={btnList2[1].base64Icon} alt="Back" />
      </div>

      <div className="text-center">
        <div className="text-6xl font-bold mb-4">404</div>
        <div className="text-2xl font-semibold mb-2">Page Not Found</div>
        <p className="text-red-600 mb-6 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 shadow-md"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
