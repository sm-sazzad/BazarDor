import Hero from "@/components/Hero";
import TopPriceRisers from "@/components/TopPriceRisers";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback="loading">
        <TopPriceRisers />
      </Suspense>
    </div>
  );
};

export default page;
