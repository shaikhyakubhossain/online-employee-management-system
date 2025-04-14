import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100dvh-160px)] flex flex-col items-center justify-center bg-red-50 text-red-800">
      <div className="text-6xl font-bold mb-4">404</div>
      <div className="text-2xl font-semibold mb-2">Page Not Found</div>
      <p className="text-red-600 mb-6 text-center max-w-md">
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
  );
}
