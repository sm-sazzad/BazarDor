import Link from "next/link";
import todaydate from "./TodayDate";
import NavLinks from "./NavLinks";
import { Suspense } from "react";
import Marque from "./Marque";
const Navbar = () => {
  return (
    <>
      <div className="bg-[#fafcfa]  border-b-[0.2px] border-b-stone-100">
        <nav className="flex justify-between items-center w-[80%] mx-auto py-2">
          <div className="flex gap-2 items-center justify-center">
            <div className="p-1.5 rounded-xl bg-[#047c37]">🛒</div>
            <div>
              <h1 className="font-bold">বাজার দর</h1>
              <p className="text-[10px] text-stone-500">{todaydate}</p>
            </div>
          </div>
          <div className="flex gap-3 font-bold">
            <Link href={"/sign-in"}>
              <button className="px-2 py-1.5 rounded-md text-sm">
                সাইন ইন
              </button>
            </Link>
            <Link href={"/sign-in"}>
              <button className="bg-[#047c37] text-white px-2 py-1.5 rounded-md text-sm">
                সাইন আপ
              </button>
            </Link>
          </div>
        </nav>
      </div>
      <div className="bg-[#fafcfa] border-b border-b-stone-200">
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <NavLinks />
        </Suspense>
      </div>
      <div className="bg-[#fafcfa] py-1">
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Marque />
        </Suspense>
      </div>
    </>
  );
};

export default Navbar;
