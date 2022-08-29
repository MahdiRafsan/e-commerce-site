import CategoryItem from "../category-item/category-item";
import "./category-menu.css";

// displays all categories on home page
const CategoryMenu = (props) => {
  const { categories } = props;
  return (
    <div className="categories-container">
      {categories.map((category) => {
        const { id } = category;
        return <CategoryItem key={id} category={category} />;
      })}
    </div>
  );
};

export default CategoryMenu;
