import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const addItem =(state, action)=>{
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
}

const removeItem =(state, action)=>{
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
        stateCopy[i].jumlah=stateCopy[i].jumlah-jumlah;
        break;
      }
    }
  }
  if(!isSame) return [...state, action.item];
  else return stateCopy;
}

const deleteItem =(state, action)=>{
  const {id} = action.item;
  let stateCopy = [...state];
  let idx=0;
  if(stateCopy.length>0)
  {
    for(var i=0;i<stateCopy.length;i++)
    {
      if(stateCopy[i].id===id)
      {
        idx=i;
      }
    }
  }
  stateCopy.splice(idx,1);
  return stateCopy;
}


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return addItem(state,action);
    case "REMOVE":
      return removeItem(state,action);
    case "DELETE":
      return deleteItem(state,action);
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
