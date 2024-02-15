import { createContext, useContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cartReducer";

const CartContext = createContext(null);

export const useCartData = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = { cartData: state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
