import Hero from "@/components/Hero";
import TopPriceFallers from "@/components/TopPriceFallers";
import TopPriceRisers from "@/components/TopPriceRisers";
import React, { Suspense } from "react";
import Loading from "./loading";

const page = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Loading />}>
        <TopPriceRisers />
        <TopPriceFallers />
      </Suspense>
    </div>
  );
};

export default page;
