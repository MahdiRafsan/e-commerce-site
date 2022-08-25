import { useNavigate } from "react-router-dom";
import "./category-item.css";

const CategoryItem = (props) => {
  // renders one category on home page
  const { title, imageUrl, route } = props.category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <div className="category-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
