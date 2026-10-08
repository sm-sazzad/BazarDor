export default function Loading() {
  const skeletonCards = Array.from({ length: 6 });

  return (
    <div className="min-h-screen w-[80%] mx-auto bg-[#f4f9f4] p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 bg-gray-200 rounded-full animate-pulse shrink-0"></div>
          <div className="space-y-3 flex-1">
            <div className="h-6 w-32 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="flex justify-between items-center px-2 py-2">
          <div className="h-5 w-40 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-5 w-16 bg-gray-300 rounded animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skeletonCards.map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 py-3 border border-gray-100 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-xl animate-pulse shrink-0"></div>
                <div className="space-y-2 mt-1 flex-1">
                  <div className="h-3 w-24 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-2 w-16 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>

              <div className="flex items-end justify-between mt-2">
                <div className="space-y-2">
                  <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="h-4 w-20 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
