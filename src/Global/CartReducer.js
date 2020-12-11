import { products } from "./Products";

export const CartReducer=(state,action)=>{
  const {ShoppingCart,totalprice,quantity}=state;
  let product;
  let index;
  let updatedPrice;
  let updatedQuantity;
  switch (action.type) 
  {
    case "ADD_TO_CART":
      const check=ShoppingCart.find(product=>product.id===action.id);
      if(check){
        return state
      }else{
        product=action.product;
        product.Qty=product.Qty+1;
        updatedQuantity=quantity+product.Qty;
        updatedPrice=totalprice+product.price;
        return {
          ShoppingCart:[product,...ShoppingCart],totalprice:updatedPrice,
          quantity:updatedQuantity
        }
      }
      case "ADDITION":
          product=action.products;
          product.Qty=product.Qty+1;
          index=ShoppingCart.findIndex(index=>index.id===action.id);
          ShoppingCart[index]=product;
          updatedQuantity=quantity+1;
          updatedPrice=totalprice+product.price;
          return{
            ShoppingCart:[...ShoppingCart],
            quantity:updatedQuantity,
            totalprice:updatedPrice
          }
      case "SUBTRACT":
        product=action.products;
        product.Qty=product.Qty-1;
        index=ShoppingCart.findIndex(index=>index.id===action.id);
        ShoppingCart[index]=product;
        updatedQuantity=quantity-1;
        updatedPrice=totalprice-product.price;
        return{
          ShoppingCart:[...ShoppingCart],
          quantity:updatedQuantity,
          totalprice:updatedPrice
        }
      case "DELETE":
        product=action.products
        updatedQuantity=quantity-product.Qty
        updatedPrice=totalprice-product.price
        ShoppingCart.splice(action.id,1)
        return{
          ShoppingCart:[...ShoppingCart],
          quantity:updatedQuantity,
          totalprice:updatedPrice
        }
    default:
      return state;
  }
}