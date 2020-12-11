import React,{useContext} from 'react'
import {products} from '../Global/Products.js'
import {Cartlist} from '../Global/CartContext.js';
const Product=()=> {
  const {product}=useContext(products); 
  const {dispatch}=useContext(Cartlist);
  console.log(dispatch); 
  return (
    <div>
    <div className="container">
      <h1>Products</h1>
    </div>
      <div className="Products-container">
          {product.map((product)=>(
            
              <div className="product" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt="img"></img>
                </div>
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <h3>${product.price}</h3>
                </div>  
                <div  className='CartAdd' onClick={()=>dispatch({type:"ADD_TO_CART",id:product.id,product})}>Add Cart</div>
              </div>
          ))}
      </div>
    </div>
  )
}

export default Product
