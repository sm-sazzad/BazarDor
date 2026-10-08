import { ProductPrice, unitBn } from "@/components/Marque";
import Link from "next/link";
import React from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const CategoryContent = async ({ categoryslug }: { categoryslug: string }) => {
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryslug}`,
  );
  const resData: ProductPrice[] = await res.json();
  //   console.log(resData);
  return (
    <div className="w-[80%] mx-auto my-10 space-y-5">
      <div className="flex items-center  bg-[#fafcfa] shadow border border-stone-300 p-3 rounded-2xl">
        <div className="p-2 rounded-xl text-4xl">{resData[0].categoryIcon}</div>
        <div>
          <h1 className="font-bold">{resData[0].categoryNameBn}</h1>
          <p className="text-sm text-stone-600">
            {resData.length.toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও
            পরিবর্তন
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <h1>
          মোট {resData.length.toLocaleString("bn-Bd")}টি পণ্য দেখানো হচ্ছে
        </h1>
        <h1>filter</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 my-4">
        {resData.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`}>
            <div className="cursor-pointer border border-gray-300 hover:border-green-700 hover:shadow-md duration-300 rounded-xl p-3 bg-[#fafcfa] space-y-2">
              <div className="flex gap-2">
                <div className="p-1 bg-stone-100 rounded-xl text-2xl">
                  {item.categoryIcon}
                </div>
                <div>
                  <h1 className="text-md font-semibold">{item.nameBn}</h1>
                  <p className="text-[11px] text-gray-600">
                    প্রতি {unitBn[item.unit as keyof typeof unitBn]}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[11px] text-gray-600">আজকের দাম</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">
                      {item.today.toLocaleString("bn-BD")}{" "}
                      <span className="font-normal text-sm">টাকা</span>
                    </p>
                  </div>
                  <div
                    className={`flex gap-1 text-[11px] items-center py-1 px-2 font-semibold rounded-full bg-gray-200 ${item.change.dir === "up" ? "text-red-700" : item.change.dir === "down" ? "text-green-700" : "text-black"}`}
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
    </div>
  );
};

export default CategoryContent;
