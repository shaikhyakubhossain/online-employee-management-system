import Link from "next/link";
import Button from "@/components/Button/button.component";
import HeroHeaderHome from "@/components/HeroHeaderHome/hero-header-home.component";
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
        className="relative text-white p-16 overflow-y-scroll pb-0"
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

        <footer className="text-white pt-16 text-center pb-0">
          <p className="text-sm">
            &copy; 2024 DRIEMS Connect. All rights reserved.
          </p>
          <p className="text-m">
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
