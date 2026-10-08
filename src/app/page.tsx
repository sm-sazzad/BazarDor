import Hero from "@/components/Hero";
import TopPriceFallers from "@/components/TopPriceFallers";
import TopPriceRisers from "@/components/TopPriceRisers";
import { Suspense } from "react";
import Loading from "./loading";
import AllProduct from "@/components/AllProduct";

const page = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Loading />}>
        <TopPriceRisers />
        <TopPriceFallers />
        <AllProduct />
      </Suspense>
    </div>
  );
};

export default page;
