import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";

import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.css";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const navigateToCheckoutHandler = () => navigate("/checkout");

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">No items added to cart</span>
        )}
      </div>
      <Button onClick={navigateToCheckoutHandler}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
