import React from "react";

// *Custom Hooks Imports*

// *API Services Imports*
import FetchAllSwords from "../../api_services/FetchAllSwords";
import FetchLongSwords from "../../api_services/FetchLongSwords";

// *Components*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

// *Design Imports*

const Home = () => {
  const [products, loadingProduct] = FetchAllSwords();
  // const [longSwords, loadingLongSwords] = FetchLongSwords();

  return (
    <main>
      <TopHeader />
      <ProductCard product={products} isLoading={loadingProduct} />
      {/* If what long sword link clicked etc. Show whatever product component */}
    </main>
  );
};

export default Home;
