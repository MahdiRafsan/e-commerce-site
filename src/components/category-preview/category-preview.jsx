import ProductCard from "../product-card/product-card";

import "./category-preview.css";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="category-title">{title.toUpperCase()}</span>
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
