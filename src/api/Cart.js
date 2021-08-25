//FUNCTION TO MANAGE USER'S CART

import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();
let recentAction = [];

const setItem = (action) => {
  console.log(action.data);
  return action.data;
};

const addItem = (action) => {
  console.log(action.data);
  return action.data;
};

// const removeItem =(state, action)=>{

// }

// const deleteItem =(state, action)=>{

// }

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      console.log(action.data);
      return setItem(action);
    case "ADD":
      return addItem(action);
    // case "REMOVE":
    //   return removeItem(state,action);
    // case "DELETE":
    //   return deleteItem(state,action);

    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

const countTotal = (data) => {
  if (data.length === 0) {
    return 0;
  } else {
    let temp = 0;
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const { jumlah, harga } = data[i];
      temp = jumlah * harga;
      sum = sum + temp;
    }
    return sum;
  }
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);

export const totalCart = (data) => {
  return countTotal(data);
};
export const recentCart = () => {
  return recentAction;
};
