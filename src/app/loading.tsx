export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f4f9f4] px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl space-y-14">
        <PriceSection trend="up" />
        <PriceSection trend="down" />
      </div>
    </div>
  );
}

function PriceSection({ trend }: { trend: "up" | "down" }) {
  const skeletonCards = Array.from({ length: 6 });
  const isUp = trend === "up";

  return (
    <section>
      {/* Section Header */}
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`h-8 w-8 animate-pulse rounded-lg ${
            isUp ? "bg-red-100" : "bg-green-100"
          }`}
        />

        <div className="space-y-2">
          <div className="h-6 w-44 animate-pulse rounded-md bg-gray-300" />
          <div className="h-3 w-28 animate-pulse rounded bg-gray-200" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skeletonCards.map((_, index) => (
          <SkeletonCard key={index} trend={trend} />
        ))}
      </div>
    </section>
  );
}

function SkeletonCard({ trend }: { trend: "up" | "down" }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Product Info */}
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 shrink-0 animate-pulse rounded-xl bg-gray-200" />

        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-5 w-28 animate-pulse rounded bg-gray-300" />
          <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-gray-100" />

      {/* Price + Percentage */}
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-7 w-28 animate-pulse rounded bg-gray-300" />
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
          <div
            className={`h-0 w-0 border-l-[5px] border-r-[5px] border-l-transparent border-r-transparent ${
              trend === "up"
                ? "border-b-8 border-b-gray-300"
                : "border-t-8 border-t-gray-300"
            }`}
          />

          <div className="h-4 w-10 animate-pulse rounded bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
