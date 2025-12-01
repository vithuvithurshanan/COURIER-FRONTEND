import type { Metadata } from "next";
import "./globals.css";
import "./styles/components.css";
import { DataProvider } from "./context/DataContext";

export const metadata: Metadata = {
  title: "Courier & Logistics Management",
  description: "Professional courier and logistics management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
