import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeleton.css";

const ProductsSkeleton = () => {
  return (
    <div className="productSkeletonContainer">
      <div className="imageSkeletonContainer">
        <Skeleton className="imageSkeleton" />
      </div>
      <div className="contentSkeletonContainer">
        <Skeleton className="titleSkeleton" />
        <Skeleton className="descripSkeleton" />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};

export default ProductsSkeleton;
