import { useContext } from "react";
import { CartContext, useReducer } from "./cartContext";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.name !== action.payload.name);
    default:
      return state;
  }
};

export default CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
