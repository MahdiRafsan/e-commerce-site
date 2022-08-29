import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart-selector";
import {
  increaseCartQuantity,
  decreaseCartQuantity,
  removeItemFromCart,
} from "../../store/cart/cart-action";

import "./checkout-item.css";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  
  const increaseProductQuantity = () => dispatch(increaseCartQuantity(cartItems, cartItem));
  const decreaseProductQuantity = () => dispatch(decreaseCartQuantity(cartItems, cartItem));
  const removeProduct = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseProductQuantity}>
          &lt;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseProductQuantity}>
          &gt;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeProduct}>
        &times;
      </div>
    </div>
  );
};

export default CheckoutItem;
