import banner from "@/assets/bazar-hero.png";
import todaydate from "./TodayDate";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center w-[90%] sm:w-[80%] mx-auto my-10 bg-[#fafcfa] border border-stone-200 shadow p-10 rounded-xl">
      <div className="space-y-3">
        <div>
          <span className="px-2 py-1 rounded-full text-[12px] bg-[#e1f0e7] text-green-700">
            {todaydate}
          </span>
        </div>
        <h1 className="text-3xl font-bold">আজকের বাজারের দাম এক নজরে</h1>
        <p className="text-sm text-stone-600">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <a href="#allProduct">
          <button className="bg-[#047c37] cursor-pointer text-white px-2 py-1.5 rounded-md text-sm">
            সব পণ্য দেখুন
          </button>
        </a>
      </div>
      <div className="justify-self-center md:justify-self-end">
        <Image className="" src={banner} alt="BazarDor" />
      </div>
    </div>
  );
};

export default Hero;
