import React from "react";

// *Component Imports*
import TopHeader from "../../components/TopHeader";

const Error500 = () => {
  return (
    <main>
      <TopHeader />
      <p>Error 500: Unknown server error occurred.</p>
    </main>
  );
};

export default Error500;
