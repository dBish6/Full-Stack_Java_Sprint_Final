import React from "react";

// *Custom Hooks Imports*

// *API Services Imports*
import FetchAllSwords from "../../api_services/FetchAllSwords";

// *Components*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

// *Design Imports*

const Home = () => {
  return (
    <main>
      <TopHeader />
      <ProductCard />
      {/* If what long sword link clicked etc. Show whatever product component */}
    </main>
  );
};

export default Home;
