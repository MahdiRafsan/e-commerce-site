import { useContext } from "react";

import { CartContext } from "../../contexts/cart-context";

import "./checkout-item.css";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } =
    useContext(CartContext);

  const increaseProductQuantity = () => increaseCartQuantity(cartItem);
  const decreaseProductQuantity = () => decreaseCartQuantity(cartItem);
  const removeProduct = () => removeItemFromCart(cartItem);

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
