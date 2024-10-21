import Link from "next/link";
import Button from "@/components/Button/button.component";
import HeroHeaderHome from "@/components/HeroHeaderHome/hero-header-home.component";
import ContinueAs from "@/components/Auth/ContinueAs/continue-as.component";
import { MainBackgroundImg } from "@/components/Auth/MainBackgroundImg/main-background-img.component";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://files.bpcontent.cloud/2024/10/11/09/20241011093608-RK2S5C9N.js"
        strategy="afterInteractive"
      />

      <div
        className="relative text-white p-8 sm:p-12 md:p-16 overflow-y-scroll pb-0"
        style={{
          background: "rgba(20, 19, 112, 0.85)",
          height: "calc(100dvh - 80px)",
          fontFamily: "'Times New Roman', serif",
          scrollbarWidth: "none",
        }}
      >
        <MainBackgroundImg />
        <HeroHeaderHome />
        <div className="flex flex-wrap text-xs sm:text-sm md:text-xl mt-4 sm:mt-6">
          <div className="mx-2 my-2 sm:mx-4">
            <Link href={"/Auth?type=login&role=admin"}>
              <Button customTW="bg-blue-500 rounded-xl hover:bg-blue-400 hover:text-white px-4 py-2 sm:px-6 sm:py-3">
                Admin Login
              </Button>
            </Link>
          </div>
          <div className="mx-2 my-2 sm:mx-4">
            <Link href={"/Auth?type=login&role=employee"}>
              <Button customTW="bg-blue-500 rounded-xl hover:bg-blue-400 hover:text-white px-4 py-2 sm:px-6 sm:py-3">
                Employee Login
              </Button>
            </Link>
          </div>
          <div className="mx-2 my-2 sm:mx-4"><ContinueAs customTW="bg-pink-500 rounded-xl hover:bg-pink-400 hover:text-white px-4 py-2 sm:px-6 sm:py-3" /></div>
        </div>

        <footer className="text-white pt-12 sm:pt-16 text-center pb-0">
          <p className="text-sm sm:text-base md:text-lg">
            Made with <span className="text-red-500">&hearts;</span> by Team{" "}
            <Link href={"/Credits"} className="text-cyan-400 hover:underline">
              Elite Six
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
