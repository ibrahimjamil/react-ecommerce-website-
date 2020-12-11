import React,{createContext,useReducer} from 'react';
import {CartReducer} from './CartReducer.js';

export const Cartlist=createContext();
const CartContext=(props)=>{
  //this {} in useReducer will pass as state in CartReducer
  const [cart, dispatch] = useReducer(CartReducer, {ShoppingCart:[],totalprice:0,quantity:0});
  return (
    //passing cart object and dispatch function to all children of Cartlist provider that get that functionalities 
    <div>
      <Cartlist.Provider value={{...cart,dispatch}}>
        {props.children}
      </Cartlist.Provider>
    </div>
  )
}

export default CartContext
