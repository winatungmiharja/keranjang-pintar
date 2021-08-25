import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();
let recentAction = [];

const addItem = (state, action) => {
  const { id, jumlah } = action.item;
  let isSame = false;
  let stateCopy = [...state];
  recentAction = ["add", jumlah];
  if (stateCopy.length > 0) {
    for (var i = 0; i < stateCopy.length; i++) {
      if (stateCopy[i].id === id) {
        isSame = true;
        stateCopy[i].jumlah = stateCopy[i].jumlah + jumlah;
        break;
      }
    }
  }
  if (!isSame) return [...state, action.item];
  else return stateCopy;
};

const removeItem = (state, action) => {
  const { id, jumlah } = action.item;
  let isSame = false;
  let stateCopy = [...state];
  recentAction.unshift(["remove", id, jumlah]);
  if (stateCopy.length > 0) {
    for (var i = 0; i < stateCopy.length; i++) {
      if (stateCopy[i].id === id) {
        isSame = true;
        stateCopy[i].jumlah = stateCopy[i].jumlah - jumlah;
        break;
      }
    }
  }
  if (!isSame) return [...state, action.item];
  else return stateCopy;
};

const deleteItem = (state, action) => {
  const { id } = action.item;
  let stateCopy = [...state];
  let idx = 0;
  recentAction.unshift(["delete", id]);
  if (stateCopy.length > 0) {
    for (var i = 0; i < stateCopy.length; i++) {
      if (stateCopy[i].id === id) {
        idx = i;
      }
    }
  }
  stateCopy.splice(idx, 1);
  return stateCopy;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return addItem(state, action);
    case "REMOVE":
      return removeItem(state, action);
    case "DELETE":
      return deleteItem(state, action);
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
