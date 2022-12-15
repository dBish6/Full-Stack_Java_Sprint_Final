import React from "react";

// *Component Imports*
import TopHeader from "../../components/TopHeader";

const Error401 = () => {
  return (
    <main>
      <TopHeader />
      <p>Error 401: You're not authorized to be here.</p>
    </main>
  );
};

export default Error401;
