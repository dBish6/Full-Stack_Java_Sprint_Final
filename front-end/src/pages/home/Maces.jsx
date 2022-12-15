import React from "react";

// *API Services Imports*
import FetchMaces from "../../api_services/FetchMaces";

// *Component Imports*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

const ShortMaces = () => {
  const [maces, loadingMaces] = FetchMaces();

  return (
    <main>
      <TopHeader />
      <ProductCard products={maces} isLoading={loadingMaces} />
    </main>
  );
};

export default ShortMaces;
