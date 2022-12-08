import React from "react";

const ProductCard = () => {
  return (
    <div className="productContainer">
      <div>
        <img src="" alt="" />
      </div>
      <h2>Bastard Sword</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        libero quis sed molestiae sunt, eos blanditiis ab mollitia ipsa dolore
        necessitatibus reprehenderit debitis soluta, sint quos iure repellat
        ipsam doloribus.
      </p>
      <hr />
      <div className="widthHeightContainer">
        <p>
          <span>Length:</span>
        </p>
        <p>
          <span>Mass:</span>
        </p>
      </div>
      <p>$99.99</p>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductCard;
