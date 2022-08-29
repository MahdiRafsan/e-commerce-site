import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer";

// HELPER FUNCTIONS
// add an item to cart
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

// remove an item from cart
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

// remove all items of one kind from the cart
const removeFromCart = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

// count the number of items in the cart
const cartCount = (cartItems) =>
  cartItems.reduce((totalCount, item) => {
    return totalCount + item.quantity;
  }, 0);

// calculate the total cost of items in the cart
const cartTotalCost = (cartItems) =>
  cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

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

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartTotal, cartQuantity } = state;

  const updateCartItems = (cartItems) => {
    const updatedCartQuantity = cartCount(cartItems);

    const updatedCartTotal = cartTotalCost(cartItems);

    const payload = {
      cartItems,
      cartTotal: updatedCartTotal,
      cartQuantity: updatedCartQuantity,
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const increaseCartQuantity = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };

  const decreaseCartQuantity = (productToDecrease) => {
    const newCartItems = removeOneFromCart(cartItems, productToDecrease);
    updateCartItems(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeFromCart(cartItems, productToRemove);
    updateCartItems(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
    cartItems,
    cartQuantity,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
