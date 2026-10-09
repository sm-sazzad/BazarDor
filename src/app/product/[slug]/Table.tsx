import { Details } from "./page";
interface tabledataProps {
  tabledata: Details;
}

const Table = ({ tabledata }: tabledataProps) => {
  return (
    <div
      className={`rounded-xl border border-gray-300 overflow-hidden overflow-x-auto sm:overflow-x-visible`}
      style={{ fontFamily: "var(--font-anekBangla)" }}
    >
      <table className="w-full text-left border-collapse text-xl px-2 text-gray-600">
        <thead className="border-b px-2">
          <tr className="px-30 ">
            <th className="py-4 px-6 font-medium whitespace-nowrap">বাজার</th>
            <th className="py-4 px-6 font-medium whitespace-nowrap"> বিভাগ</th>
            <th className="py-4 px-6 font-medium whitespace-nowrap">
              সর্বনিম্ন
            </th>
            <th className="py-4 px-6 font-medium whitespace-nowrap text-center">
              সর্বাধিক
            </th>
            <th className="py-4 px-6 font-medium whitespace-nowrap text-right">
              গড়
            </th>
          </tr>
        </thead>
        <tbody>
          {tabledata.markets.map((n, indx) => (
            <tr
              key={indx}
              className={`${indx % 2 === 0 ? "bg-stone-100" : "bg-white"} text-lg`}
            >
              <td className="py-4 px-6 text-gray-800 whitespace-nowrap">
                {n.market}
              </td>
              <td className="py-4 px-6 text-gray-800 whitespace-nowrap">
                {n.division}
              </td>
              <td className="py-4 px-6 text-gray-800 whitespace-nowrap">
                {n.min.toLocaleString("bn-BD")} <span>টাকা</span>
              </td>
              <td className="py-4 px-6 text-gray-800 whitespace-nowrap text-center">
                {n.max.toLocaleString("bn-BD")} <span>টাকা</span>
              </td>
              <td className="py-4 px-6 text-black whitespace-nowrap text-right">
                {((n.max + n.min) / 2).toLocaleString("bn-BD")}{" "}
                <span>টাকা</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
