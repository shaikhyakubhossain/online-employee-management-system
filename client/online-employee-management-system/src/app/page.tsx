import Link from "next/link";
import Button from "@/components/Button/button.component";
import HeroHeaderHome from "@/components/HeroHeaderHome/hero-header-home.component";
import { MainBackgroundImg } from "@/components/Auth/MainBackgroundImg/main-background-img.component";

export default function Home() {
  return (
    <div
      className="relative text-white p-16 overflow-y-scroll"
      style={{
        background: "rgba(20, 19, 112, 0.85)",
        height: "calc(100dvh - 80px)",
        fontFamily: "'Times New Roman', serif",
        scrollbarWidth: "none",
      }}
    >
      <MainBackgroundImg />
      <HeroHeaderHome />
      <div className="flex flex-wrap text-2xl max-sm:text-sm mt-6">
        <div className="mx-4 my-2">
          <Link href={"/Auth?type=login&role=admin"}>
            <Button customTW="bg-blue-500 rounded-xl hover:bg-blue-400 hover:text-white px-8 py-4">
              Admin Login
            </Button>
          </Link>
        </div>
        <div className="mx-4 my-2">
          <Link href={"/Auth?type=login&role=employee"}>
            <Button customTW="bg-blue-500 rounded-xl hover:bg-blue-400 hover:text-white px-8 py-4">
              Employee Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
