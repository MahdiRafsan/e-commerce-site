import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const itemExistsInCart = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  // If item is found, increase quantity
  if (itemExistsInCart) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  // return new array with modified cartItems/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeOneFromCart = (cartItems, productToDecrease) => {
  //find if cartItems contains productToDecrease
  const itemExistsInCart = cartItems.find((item) => {
    return item.id === productToDecrease.id;
  });

  // If quantity is 1, remove from the cart
  if (itemExistsInCart.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToDecrease.id);
  }

  // reduce quantity of cart item by 1
  return cartItems.map((item) =>
    item.id === productToDecrease.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const removeFromCart = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  removeItemFromCart: () => {},
  cartQuantity: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const increaseCartQuantity = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaseCartQuantity = (productToDecrease) => {
    setCartItems(removeOneFromCart(cartItems, productToDecrease));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeFromCart(cartItems, productToRemove));
  };

  const cartQuantity = cartItems.reduce((totalCount, item) => {
    return totalCount + item.quantity;
  }, 0);

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price
  }, 0)

  const value = {
    isCartOpen,
    setIsCartOpen,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
    cartItems,
    cartQuantity,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
