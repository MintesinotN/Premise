import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Premise",
  icons:"vercel.svg",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="my-12 md:ml-20 md:mr-40 mx-4">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}