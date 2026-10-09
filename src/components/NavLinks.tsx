"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface INav {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = () => {
  const [navlink, setNavlink] = useState<INav[]>([]);
  const pathName = usePathname();

  useEffect(() => {
    fetch(
      // "https://api.api-store.workers.dev/api/bazardor/categories",
      "https://api.abcz.workers.dev/api/bazardor/categories",
    )
      .then((resData) => resData.json())
      .then((data) => setNavlink(data));
  }, []);

  return (
    <div className="flex gap-1 py-2 w-[95%] sm:w-[80%] overflow-x-auto sm:overflow-x-visible mx-auto">
      {navlink.map((item) => (
        <Link
          className={`${pathName === `/category/${item.slug}` ? "bg-green-700 text-white" : "hover:bg-stone-300"} py-1 px-3 text-nowrap rounded-md font-semibold text-[12px] border border-transparent hover:border-stone-400`}
          key={item.id}
          href={`/category/${item.slug}`}
        >
          <span>{item.icon}</span> {item.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
