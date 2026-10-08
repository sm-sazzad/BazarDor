import { ProductPrice, unitBn } from "@/components/Marque";
import Link from "next/link";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Filter from "./Filter";

const CategoryContent = async ({ categoryslug }: { categoryslug: string }) => {
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryslug}`,
  );
  const resData: ProductPrice[] = await res.json();

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
      <div>
        <Filter resData={resData} />
      </div>
    </div>
  );
};

export default CategoryContent;
