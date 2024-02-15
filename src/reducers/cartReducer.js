const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((cart) => cart.id !== action.payload.id);
    default:
      return state;
  }
};

export { cartReducer, initialState };
