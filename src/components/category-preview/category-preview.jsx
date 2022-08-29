import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card";

import "./category-preview.css";

// renders preview for each category on shop page (first 4 items from the list)
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`${title}`}>
          <span className="category-title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="category-preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
