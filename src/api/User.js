import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      const { name, email, id } = action.data;
      return { name: name, email: email, id: id };
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useUser = () => useContext(CartStateContext);
export const useDispatchUser = () => useContext(CartDispatchContext);
