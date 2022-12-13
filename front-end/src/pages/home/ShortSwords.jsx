import React from "react";

// *API Services Imports*
import FetchShortSwords from "../../api_services/FetchShortSwords";

// *Components*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

const ShortSwords = () => {
  const [shortSwords, loadingShortSwords] = FetchShortSwords();

  return (
    <main>
      <TopHeader />
      <ProductCard products={shortSwords} isLoading={loadingShortSwords} />
    </main>
  );
};

export default ShortSwords;
