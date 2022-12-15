import React from "react";

// *API Services Imports*
import FetchAllSwords from "../../api_services/FetchAllSwords";

// *Component Imports*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [products, loadingProduct] = FetchAllSwords();

  return (
    <main>
      <TopHeader />
      <ProductCard products={products} isLoading={loadingProduct} />
    </main>
  );
};

export default Home;
