import { BiSolidUpArrow, BiUpArrow } from "react-icons/bi";
import { ProductPrice, unitBn } from "./Marque";
import Link from "next/link";

const TopPriceRisers = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const resData: ProductPrice[] = await res.json();
  const PriceUp = resData
    .filter((n) => n.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct);

  return (
    <div className="w-[80%] mx-auto my-10">
      <div className="flex items-center gap-2 font-bold">
        <BiSolidUpArrow className="inline text-red-600" /> আজ দাম বেড়েছে
      </div>
      <div className="grid grid-cols-3 gap-4 my-4">
        {PriceUp.slice(0, 6).map((item) => (
          <Link key={item.id} href={`/product/${item.id}`}>
            <div className="cursor-pointer border border-gray-300 hover:border-green-700 hover:shadow-md duration-300 rounded-xl p-3 bg-[#fafcfa] space-y-2">
              <div className="flex gap-2">
                <div className="p-1 bg-stone-100 rounded-xl text-2xl">
                  {item.categoryIcon}
                </div>
                <div>
                  <h1 className="text-md font-semibold">
                    {item.categoryNameBn}
                  </h1>
                  <p className="text-[11px] text-gray-600">
                    প্রতি {unitBn[item.unit as keyof typeof unitBn]}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[11px] text-gray-600">আজকের দাম</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className=" font-bold">
                      {item.today.toLocaleString("bn-BD")}{" "}
                      <span className="font-normal text-sm">টাকা</span>
                    </p>
                  </div>
                  <div className="flex gap-1 text-[11px] items-center py-1 px-2 font-semibold rounded-full bg-gray-200 text-red-700">
                    <BiSolidUpArrow className="inline" />{" "}
                    {item.change.pct.toLocaleString("bn-BD")}%
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

export default TopPriceRisers;
