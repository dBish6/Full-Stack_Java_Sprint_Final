import React from "react";
import { useSelector } from "react-redux";

// *Component Imports*
import TopHeader from "../../components/TopHeader";
import ProductCard from "../../components/ProductCard";

// *Selector Import*
import { selectSearchResults } from "../../redux/selectors";

const Search = () => {
  const searchResults = useSelector(selectSearchResults);

  return (
    <main>
      <TopHeader />
      <ProductCard searchResults={searchResults} />
    </main>
  );
};

export default Search;
