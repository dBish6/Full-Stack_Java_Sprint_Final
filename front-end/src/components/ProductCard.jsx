import React from "react";

// *API Services Imports*
import FetchAllSwords from "../api_services/FetchAllSwords";

// *Design Imports*
import noImage from "../assets/images/no-image.webp";
import ProductsSkeleton from "../skeletons/ProductsSkeleton";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import "./productCard.css";

const ProductCard = () => {
  const [product, loadingProduct] = FetchAllSwords();

  return (
    <div className="productGridContainer">
      {loadingProduct ? (
        <ProductsSkeleton />
      ) : (
        product &&
        product.map((sword) => {
          return (
            <div className="productContainer" key={sword.sword_id}>
              <div className="imageContainer">
                {!sword.image_url.includes("https") ? (
                  <img src={noImage} alt="no-image.webp" />
                ) : (
                  <img src={sword.image_url} alt="image_url" />
                )}
              </div>
              <div className="contentContainer">
                <h2 className={sword.name.length >= 13 && "fontSize"}>
                  {sword.name}
                </h2>
                <div>
                  <p className="description">{sword.description}</p>
                  <ReadMoreIcon />
                </div>
                <hr />
                <div className="widthHeightContainer">
                  <p>
                    <span>Length:</span> {sword.length}in
                  </p>
                  <p>
                    <span>Mass:</span> {sword.mass} lbs
                  </p>
                </div>
                <div className="priceBuyNowContainer">
                  <p>${sword.price}</p>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ProductCard;
