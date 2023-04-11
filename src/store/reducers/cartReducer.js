import { ADD_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initalState ={

    cartItems: cartItems,
}

export default function cartReducer(state=initalState,{type,payload}){
  switch (type) {
    case ADD_TO_CART:

    let product =state.cartItems.find((c) => c.product.id===payload.id);
    console.log(product)
    if(product){
        product.quantity++;
        return{...state,product};
    }else{
        return{
            ...state,
            cartItems:[...state.cartItems,{quantity:1,product:payload}]
        }
         
    }
  
    default:
        return state;
  }




}