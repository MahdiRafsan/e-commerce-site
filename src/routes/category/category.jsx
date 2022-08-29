import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card";
import Spinner from "../../components/spinner/spinner";

import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store/categories/category-selector";
import "./category.css";

// renders all products of a category on its own page
// route: '/shop/:category'
const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container-category-page">
      <h2>{category}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-items-container">
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Category;
