import Link from "next/link";
import Head from "next/head";
import Button from "@/components/Button/button.component";
import HeroHeaderHome from "@/components/HeroHeaderHome/hero-header-home.component";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="relative text-white p-16"
        style={{
          background: "rgba(20, 19, 112, 0.85)",
          height: "88.5dvh",
          fontFamily: "Lora, serif",
        }}
      >
        <img
          className="absolute top-0 left-0 w-full -z-10"
          style={{ height: "88.5dvh" }}
          src={`https://drive.google.com/thumbnail?id=1BjLxXodycVILUUQ4rKuaNdcWVFqGG085`}
          alt=""
        />
        <HeroHeaderHome />
        <div className="flex text-2xl max-sm:text-sm mt-6">
          {" "}
          {/* Added margin-top for spacing */}
          <div className="mr-4">
            <Link href={"/Auth?type=login&role=admin"}>
              <Button customTW="bg-blue-500 rounded-xl hover:bg-blue-400 hover:text-white px-8 py-4">
                Admin Login
              </Button>
            </Link>
          </div>
          <div className="ml-4">
            <Link href={"/Auth?type=login&role=employee"}>
              <Button customTW="bg-blue-500 rounded-xl hover:bg-blue-400 hover:text-white px-8 py-4">
                Employee Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
