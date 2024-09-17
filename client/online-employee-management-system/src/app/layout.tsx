import "./globals.css";
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
          <BodyContainer>{children}</BodyContainer>
        </RTKStoreProvider>
      </body>
    </html>
  );
}
