import React from "react";

const Footer = () => {
  return (
    <div className="py-5 bg-white border-t border-t-gray-300">
      <div className="flex flex-col min-[750]:flex-row text-center justify-between items-center w-[80%] mx-auto">
        <p className="text-[15px] sm:text-[18px] text-gray-600">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
        <p className="text-[15px] sm:text-[18px] text-gray-600">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </div>
  );
};

export default Footer;
