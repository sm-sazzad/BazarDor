import Link from "next/link";
import todaydate from "./TodayDate";
import NavLinks from "./NavLinks";
import { Suspense } from "react";
import Marque from "./Marque";
import SignUpIn from "./SignUpIn";
const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 ">
        <div className="bg-[#fafcfa] border-b-[0.2px] border-b-stone-100">
          <nav className="relative flex justify-between items-center w-[95%] sm:w-[80%] mx-auto py-2">
            <Link href={"/"}>
              <div className="flex gap-2 items-center justify-center">
                <div className="p-1.5 text-xl sm:text-2xl rounded-xl bg-[#047c37]">
                  🛒
                </div>
                <div>
                  <h1 className="font-bold text-2xl sm:text-3xl">বাজার দর</h1>
                  <p className="text-[10px] sm:text-[13px] text-stone-500">
                    {todaydate}
                  </p>
                </div>
              </div>
            </Link>
            <SignUpIn />
          </nav>
        </div>
        <div className="bg-[#fafcfa] border-b border-b-stone-200">
          <Suspense fallback={<div className="text-center">Loading...</div>}>
            <NavLinks />
          </Suspense>
        </div>
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
