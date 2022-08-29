import { CART_ACTION_TYPES } from "./cart-types";
import { createAction } from "../../utils/reducer/reducer";

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
const clearFromCart = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const setIsCartOpen = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
};

export const increaseCartQuantity = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decreaseCartQuantity = (cartItems, productToDecrease) => {
  const newCartItems = removeOneFromCart(cartItems, productToDecrease);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = clearFromCart(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
