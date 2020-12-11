import React, {useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {Cartlist} from '../Global/CartContext.js';
const Cart=()=>{
  const {ShoppingCart,totalprice,quantity,dispatch} = useContext(Cartlist);
  const Style={
    width:'100px',
    height: '100px',
    textAlign: 'center'
  }
  const TOKEN= async(token)=>{
    const product={name:"all products",price:totalprice}
    const response=await axios.post('http://localhost:8080/checkout',{
      product,
      token
    });
    console.log(response);
    console.log("hello");
  }
  return (
    <div>
      {ShoppingCart.length > 0 ?
        ShoppingCart.map((products,id)=>(
            <div className="Products-container1">
                <img style={Style} src={products.image}></img>
                <div className="left addon">
                  <h1>Price:{products.price*products.Qty}</h1>
                </div>
                <div>
                  <h1>Qty:{products.Qty}</h1>
                </div>
              <div  className="CartAdd1 right" id={id} onClick={()=>dispatch({type:'ADDITION',id,products})}>+</div>
              <div  className="CartAdd1 right" id={id} onClick={()=>dispatch({type:'SUBTRACT',id,products})}>-</div>
              <div  className="CartAdd1 right" id={id} onClick={()=>dispatch({type:'DELETE',id,products})}>Del</div>
            </div>
        ))
      :''}
      <div>
                <div>
                  <h1>Total Price is :{totalprice}</h1>
                </div>
                <div style={{marginBottom:'10px'}}>
                  <h1>Total Qty is :{quantity}</h1>
                </div>
                <StripeCheckout stripeKey="pk_test_51HsDgMAT3oI0Gix5z7BpFsf06FTBiH0YKXxXjfENXBMnJ0AK6yMf7ejzqm5TvmNh6bG5HDFJL6d3gFA4fOTyQls000U0WvY0ed" token={TOKEN} 
                billingAddress
                shippingAddress
                amount={totalprice * 100}
                name="All products">
                    
                </StripeCheckout> 
      </div>
    </div>
  )
}

export default Cart