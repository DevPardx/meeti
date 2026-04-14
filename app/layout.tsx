import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { generatePageTitle } from "@/src/shared/utils/metadata";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: generatePageTitle("Home"),
  description: "Meeti project with Next.js and DrizzleORM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full bg-white antialiased`}
    >
      <body className="min-h-full">
        {children}  
        <ToastContainer
          position="top-right"
          autoClose={5000}
          pauseOnHover={false}
        />
      </body>
    </html>
  );
}
