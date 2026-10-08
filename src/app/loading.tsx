export default function Loading() {
  const skeletonCards = Array.from({ length: 6 });

  return (
    <div className="min-h-screen bg-[#f4f9f4] p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[16px] border-b-red-300 border-r-[10px] border-r-transparent"></div>
            <div className="h-7 w-48 bg-gray-300 rounded animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skeletonCards.map((_, index) => (
              <SkeletonCard key={index} trend="up" />
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[16px] border-t-green-300 border-r-[10px] border-r-transparent"></div>
            <div className="h-7 w-48 bg-gray-300 rounded animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skeletonCards.map((_, index) => (
              <SkeletonCard key={index} trend="down" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function SkeletonCard({ trend }: { trend: "up" | "down" }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden w-[80%] mx-auto">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse shrink-0"></div>

        <div className="space-y-2 mt-1 flex-1">
          <div className="h-5 w-24 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="flex items-end justify-between mt-6">
        <div className="space-y-2">
          <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-7 w-28 bg-gray-300 rounded animate-pulse"></div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100">
          <div
            className={`w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent ${
              trend === "up"
                ? "border-b-[8px] border-b-gray-300"
                : "border-t-[8px] border-t-gray-300"
            }`}
          ></div>
          <div className="h-4 w-10 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
