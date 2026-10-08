import { unitBn } from "@/components/Marque";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Table from "./Table";
import Link from "next/link";
import { RiArrowDropRightLine } from "react-icons/ri";

export interface Details {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: { dir: string; pct: number };
  markets: { market: string; division: string; min: number; max: number }[];
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res = await fetch(
    // `https://api.api-store.workers.dev/api/bazardor/products/${slug}`,
    `https://api.abcz.workers.dev/api/bazardor/products/${slug}`,
  );
  const resData: Details = await res.json();

  const min = Math.min(...resData.markets.map((n) => n.min));
  const max = Math.max(...resData.markets.map((n) => n.max));

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto my-10">
      <div className="mb-3 text-[14px]">
        <Link className="hover:underline" href={"/"}>
          হোম
        </Link>{" "}
        <RiArrowDropRightLine className="inline" />
        <Link
          className="hover:underline"
          href={`/category/${resData.category}`}
        >
          {resData.categoryNameBn}
        </Link>{" "}
        <RiArrowDropRightLine className="inline" />{" "}
        <span>{resData.nameBn}</span>
      </div>
      <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between sm:items-center bg-white border border-stone-300 rounded-xl py-5 px-5">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl py-5 px-4 rounded-xl bg-gray-100">
            {resData.categoryIcon}
          </h1>
          <div>
            <h1 className="text-2xl font-bold">{resData.nameBn}</h1>
            <p className="text-[13px] text-gray-600">
              প্রতি কেজি {resData.categoryNameBn}
            </p>
            <p className="text-[13px] mt-2 text-gray-600">
              গতকালের তুলনায় আজ দাম{" "}
              <span>
                {resData.change.dir === "up" ? (
                  <>
                    <span className="font-semibold">বেড়েছে</span>{" "}
                    {resData.change.pct.toLocaleString("bn-BD")}%
                  </>
                ) : resData.change.dir === "down" ? (
                  <>
                    <span className="font-semibold">কমেছে</span>{" "}
                    {resData.change.pct.toLocaleString("bn-BD")}%
                  </>
                ) : (
                  <>
                    <span className="font-semibold">অপরিবর্তিত</span>
                  </>
                )}
              </span>
            </p>
          </div>
        </div>
        <div className="py-3 px-5 text-center bg-gray-100 rounded-xl">
          <p className="text-[13px] text-gray-600">আজকের দাম</p>
          <h1 className="font-bold text-2xl">
            {resData.today.toLocaleString("bn-BD")}
          </h1>
          <p className="text-[13px] text-gray-600">
            টাকা / {unitBn[resData.unit as keyof typeof unitBn]}
          </p>
          <span
            className={`text-[14px] ${resData.change.dir === "up" ? "text-red-700" : resData.change.dir === "down" ? "text-green-700" : "text-black"}`}
          >
            {resData.change.dir === "down" ? (
              <>
                <BiSolidDownArrow className="inline" />{" "}
              </>
            ) : resData.change.dir === "up" ? (
              <>
                <BiSolidUpArrow className="inline" />{" "}
              </>
            ) : (
              <>
                <TfiLayoutLineSolid className="inline" />{" "}
              </>
            )}
            {Math.abs(resData.change.pct).toLocaleString("bn-BD")}%
          </span>
        </div>
      </div>
      <div className="border border-gray-300 bg-white my-5 p-4 rounded-xl">
        <h1 className="font-bold text-xl my-2">দামের সারসংক্ষেপ</h1>
        <div className="grid grid-cols-1 min-[500]:grid-cols-2 md:grid-cols-3 gap-2 justify-between">
          <div className="border border-gray-200 bg-gray-50 p-4 rounded-xl">
            <p className="text-[13px] text-gray-600">সর্বনিম্ন দাম</p>
            <h1 className="font-bold text-xl text-green-700">
              {min.toLocaleString("bn-BD")}{" "}
              <span className="font-normal text-sm">টাকা</span>
            </h1>
            <p className="text-[13px] text-gray-600">সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="border border-gray-200 bg-gray-50 p-4 rounded-xl">
            <p className="text-[13px] text-gray-600">সর্বাধিক দাম</p>
            <h1 className="font-bold text-xl text-red-700">
              {max.toLocaleString("bn-BD")}{" "}
              <span className="font-normal text-sm">টাকা</span>
            </h1>
            <p className="text-[13px] text-gray-600">
              সবচেয়ে বেশি দামের বাজার
            </p>
          </div>
          <div className="border border-gray-200 bg-gray-50 p-4 rounded-xl">
            <p className="text-[13px] text-gray-600">গড় দাম</p>
            <h1 className="font-bold text-xl text-green-700">
              {((min + max) / 2).toLocaleString("bn-BD")}{" "}
              <span className="font-normal text-sm">টাকা</span>
            </h1>
            <p className="text-[13px] text-gray-600">প্রতি কেজি-এর হিসাবে</p>
          </div>
        </div>
        <h1 className="font-bold text-xl my-5">বাজারভিত্তিক আজকের দাম</h1>
        <div>
          <Table tabledata={resData} />
        </div>
      </div>
      <div>
        <Link href={`/category/${resData.category}`}>
          <button className="py-1 px-3 bg-stone-200 rounded-xl border border-gray-500 cursor-pointer">
            {resData.categoryIcon}{" "}
            <span className="text-[13px]">সব {resData.categoryNameBn}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
