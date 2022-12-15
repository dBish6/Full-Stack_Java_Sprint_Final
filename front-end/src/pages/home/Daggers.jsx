import React from "react";

// *API Services Imports*
import FetchDaggers from "../../api_services/FetchDaggers";

// *Component Imports*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

const Daggers = () => {
  const [daggers, loadingDaggers] = FetchDaggers();

  return (
    <main>
      <TopHeader />
      <ProductCard products={daggers} isLoading={loadingDaggers} />
    </main>
  );
};

export default Daggers;
