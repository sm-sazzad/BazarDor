import Link from "next/link";

interface INav {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const resData: INav[] = await res.json();

  return (
    <div className="flex gap-1 py-2 w-[80%] mx-auto">
      {resData.map((item) => (
        <Link
          className="py-1 px-3 rounded-md font-semibold text-[10px] border border-transparent hover:border-stone-400 hover:bg-stone-300"
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
