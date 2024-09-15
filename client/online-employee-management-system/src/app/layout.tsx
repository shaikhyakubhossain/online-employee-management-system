import "./globals.css";
import Nav from "../components/Nav/nav.component";
import LeftMenu from "@/components/LeftMenu/left-menu.component";
import RTKStoreProvider from "@/components/RTKStoreProvider/rtk-store-provider.component";
import BodyContainer from "@/components/BodyContainer/body-container.component";

export const metadata = {
  title: "Employeeverse",
  description:
    "Welcome to Employeeverse, an online employee management system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RTKStoreProvider>
          <Nav />
          <LeftMenu />
          <BodyContainer>{children}</BodyContainer>
        </RTKStoreProvider>
      </body>
    </html>
  );
}
