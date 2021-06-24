import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();



const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const {id,jumlah} = action.item;
      let isSame = false;
      let stateCopy = [...state];
      if(stateCopy.length>0)
      {
        for(var i=0;i<stateCopy.length;i++)
        {
          if(stateCopy[i].id===id)
          {
            isSame=true;
            stateCopy[i].jumlah=stateCopy[i].jumlah+jumlah;
            break;
          }
        }
      }
      if(!isSame) return [...state, action.item];
      else return stateCopy;
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
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

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
