import CategoryItem from "../category-item/category-item.component";
import "./category-menu.styles.css";

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
