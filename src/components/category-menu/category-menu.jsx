import CategoryItem from "../category-item/category-item";
import "./category-menu.css";

const CategoryMenu = (props) => {
  // renders all categories on home page
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
