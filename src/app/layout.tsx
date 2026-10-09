import type { Metadata } from "next";
import {
  Anek_Bangla,
  Hind_Siliguri,
  Noto_Sans_Bengali,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const anekBangla = Anek_Bangla({
  subsets: ["bengali"],
  variable: "--font-anekBangla",
  weight: ["300", "400", "500", "600", "700"],
});

const hind_Siliguri = Hind_Siliguri({
  subsets: ["bengali"],
  variable: "--font-noto-bengali",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "বাজার দর | আজকের নিত্যপণ্যের বাজারমূল্য",
  description:
    "বাংলাদেশের চাল, ডাল, তেল, মাছ, মাংস, সবজি ও অন্যান্য নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর জানুন। গতকালের দামের সঙ্গে তুলনা করুন এবং দামের পরিবর্তন দেখুন।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hind_Siliguri.className} ${anekBangla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f0f5f0]">
        <Navbar />
        <main className="flex-1 scroll-mt-50">{children}</main>
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
