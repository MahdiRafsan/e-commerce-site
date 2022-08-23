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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartQuantity: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const cartQuantity = cartItems.reduce((totalCount, item)=> {
    return totalCount + item.quantity
  }, 0)

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
