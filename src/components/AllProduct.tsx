import { ProductPrice, unitBn } from "./Marque";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const AllProduct = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const resData: ProductPrice[] = await res.json();
  return (
    <div className="w-[80%] mx-auto my-10">
      <div>
        <h1 className="text-2xl font-bold">সব পণ্য</h1>
        <p className="text-[12px] text-gray-600 my-3">
          মোট {resData.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 my-4">
        {resData.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer border border-gray-300 hover:border-green-700 hover:shadow-md duration-300 rounded-xl p-3 bg-[#fafcfa] space-y-2"
          >
            <div className="flex gap-2">
              <div className="p-1 bg-stone-100 rounded-xl text-2xl">
                {item.categoryIcon}
              </div>
              <div>
                <h1 className="text-md font-semibold">{item.categoryNameBn}</h1>
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
                  className={`flex gap-1 text-[11px] items-center py-1 px-2 font-semibold rounded-full bg-gray-200 ${item.change.dir === "up" ? "text-red-700" : "text-green-700"}`}
                >
                  {item.change.dir === "down" ? (
                    <>
                      <BiSolidDownArrow className="inline" />{" "}
                    </>
                  ) : (
                    <>
                      <BiSolidUpArrow className="inline" />{" "}
                    </>
                  )}
                  {Math.abs(item.change.pct).toLocaleString("bn-BD")}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
