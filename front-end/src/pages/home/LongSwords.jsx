import React from "react";

// *API Services Imports*
import FetchLongSwords from "../../api_services/FetchLongSwords";

// *Component Imports*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

const LongSwords = () => {
  const [longSwords, loadingLongSwords] = FetchLongSwords();

  return (
    <main>
      <TopHeader />
      <ProductCard products={longSwords} isLoading={loadingLongSwords} />
    </main>
  );
};

export default LongSwords;
