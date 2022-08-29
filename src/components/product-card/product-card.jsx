import { useDispatch, useSelector } from "react-redux";

import { increaseCartQuantity } from "../../store/cart/cart-action";
import { selectCartItems } from "../../store/cart/cart-selector";

import Button from "../button/button";

import "./product-card.css";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () =>
    dispatch(increaseCartQuantity(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="product-footer">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
