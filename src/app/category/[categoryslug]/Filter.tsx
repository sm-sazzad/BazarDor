"use client";
import { ProductPrice, unitBn } from "@/components/Marque";
import Link from "next/link";
import { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { TfiLayoutLineSolid } from "react-icons/tfi";

interface Props {
  resData: ProductPrice[];
}

const Filter = ({ resData }: Props) => {
  const [filter, setFilter] = useState<string>("default");

  const sortedData = [...resData].sort((a, b) => {
    if (filter === "minmax") {
      return a.today - b.today;
    }

    if (filter === "maxmin") {
      return b.today - a.today;
    }

    return 0;
  });

  return (
    <>
      <div className="min-[500]:flex items-center justify-between">
        <h1 className="text-lg">
          মোট {resData.length.toLocaleString("bn-Bd")}টি পণ্য দেখানো হচ্ছে
        </h1>
        <div className="flex gap-3 items-center">
          <h1 className="text-lg">সাজান</h1>
          <select
            className="border rounded-sm"
            defaultValue={"default"}
            onChange={(e) => setFilter(e.target.value as string)}
          >
            <option value="default">ডিফল্ট</option>
            <option value="minmax">দাম: কম থেকে বেশি</option>
            <option value="maxmin">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 min-[500]:grid-cols-2 md:grid-cols-3 gap-4 my-4">
        {sortedData.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`}>
            <div className="cursor-pointer border border-gray-300 hover:border-green-700 hover:shadow-md duration-300 rounded-xl p-3 bg-[#fafcfa] space-y-2">
              <div className="flex gap-2">
                <div className="p-1 bg-stone-100 rounded-xl text-3xl">
                  {item.image}
                </div>
                <div>
                  <h1 className="text-xl font-semibold">{item.nameBn}</h1>
                  <p className="text-[14px] text-gray-600">
                    প্রতি {unitBn[item.unit as keyof typeof unitBn]}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[14px] text-gray-600">আজকের দাম</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-2xl">
                      {item.today.toLocaleString("bn-BD")}{" "}
                      <span className="font-normal text-sm">টাকা</span>
                    </p>
                  </div>
                  <div
                    className={`flex gap-1 text-[14px] items-center py-1 px-2 font-semibold rounded-full bg-gray-200 ${item.change.dir === "up" ? "text-red-700" : item.change.dir === "down" ? "text-green-700" : "text-black"}`}
                  >
                    {item.change.dir === "down" ? (
                      <>
                        <BiSolidDownArrow className="inline" />{" "}
                      </>
                    ) : item.change.dir === "up" ? (
                      <>
                        <BiSolidUpArrow className="inline" />{" "}
                      </>
                    ) : (
                      <>
                        <TfiLayoutLineSolid className="inline" />{" "}
                      </>
                    )}
                    {Math.abs(item.change.pct).toLocaleString("bn-BD")}%
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Filter;
