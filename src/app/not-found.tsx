import Link from "next/link";

export default function NotFound() {
  return (
    // Main Wrapper with light green background matching previous pages
    <div className="min-h-screen bg-[#f4f9f4] flex flex-col items-center justify-center p-4 font-sans text-center">
      {/* 404 Graphic/Text */}
      <div className="mb-6">
        <h1 className="text-8xl md:text-9xl font-extrabold text-[#0d7a3e] tracking-wider mb-2">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          ওহো! পেজটি খুঁজে পাওয়া যায়নি।
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে, নাম পরিবর্তন করা
          হয়েছে, অথবা এটি সাময়িকভাবে অনুপলব্ধ।
        </p>
      </div>

      {/* Action Button */}
      <Link
        href="/"
        className="bg-[#0d7a3e] hover:bg-[#0a6332] text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
