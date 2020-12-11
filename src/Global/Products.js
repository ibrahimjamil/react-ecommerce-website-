import React,{useState,createContext} from 'react';
import Product from '../components/Product.js';
import header1 from '../images/header1.jpg';
import header2 from '../images/header2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'

export const products=createContext();
const ProductsContext=(props)=>{
  const [items]=useState([
    {id:'1',name:'pic1',image:header1,price:300,Qty:0},
    {id:'2',name:'pic2',image:header2,price:400,Qty:0},
    {id:'3',name:'pic3',image:image3,price:500,Qty:0},
    {id:'4',name:'pic4',image:image4,price:600,Qty:0},
    {id:'5',name:'pic5',image:image5,price:700,Qty:0},
    {id:'6',name:'pic6',image:image6,price:800,Qty:0}
  ])
  return(
    <products.Provider value={{product:[...items]}}>
        {props.children}
    </products.Provider>
  )
}

export default ProductsContext;