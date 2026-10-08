import Link from "next/link";
import Marquee from "react-fast-marquee";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";
export interface ProductPrice {
  id: number;
  slug: string;
  nameBn: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  today: number;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

export const unitBn = {
  kg: "কেজি",
  gram: "গ্রাম",
  litre: "লিটার",
  liter: "লিটার",
  ml: "মিলিলিটার",
  piece: "টি",
  pcs: "টি",
  dozen: "ডজন",
  ton: "টন",
  maund: "মণ",
  packet: "প্যাকেট",
  bottle: "বোতল",
  box: "বক্স",
};

const Marque = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const resData: ProductPrice[] = await res.json();
  //   console.log(resData);
  return (
    <Marquee speed={100}>
      {resData.map((n) => (
        <Link className={`inline-block `} key={n.id} href={`/product/${n.id}`}>
          <div className="flex text-[13px] text-stone-600">
            <div>
              {n.categoryIcon} {n.nameBn} {n.today.toLocaleString("bn-BD")}{" "}
              টাকা/
              {unitBn[n.unit as keyof typeof unitBn]}{" "}
            </div>
            {n.change.dir === "up" ? (
              <div className="flex items-center font-semibold justify-center mx-1 text-red-600">
                <FaCaretUp /> {n.change.pct.toLocaleString("bn-BD")}%
              </div>
            ) : n.change.dir === "down" ? (
              <div className="flex items-center font-semibold justify-center mx-1 text-green-500">
                <FaCaretDown />
                {Math.abs(n.change.pct).toLocaleString("bn-BD")}%
              </div>
            ) : (
              <div className="flex gap-1 items-center font-semibold justify-center mx-1">
                <TfiLayoutLineSolid className="inline" />
                {n.change.pct.toLocaleString("bn-BD")}%
              </div>
            )}

            <span className="mx-3">|</span>
          </div>
        </Link>
      ))}
    </Marquee>
  );
};

export default Marque;
