import { useContext } from "react";
import {useSelector} from 'react-redux'
import { selectCategoriesMap } from "../../store/categories/category-selector"; 

// import { CategoriesContext } from "../../contexts/categories-context";
import CategoryPreview from "../../components/category-preview/category-preview";

// renders preview for all categories on shop page
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  // const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreview;