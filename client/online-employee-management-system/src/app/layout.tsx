import "./globals.css";
import Nav from "../components/Nav/nav.component";
import LeftMenu from "@/components/Dashboard/LeftMenu/left-menu.component";

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
        <Nav />
        <LeftMenu />
        <div className="ml-60 p-9">{children}</div>
      </body>
    </html>
  );
}
