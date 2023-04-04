import axios from "axios"

export default class ProductService{
   getProducts(){
      return axios.get("https://data.hakanozdabak.dev/items/")
   }
   
   getProductByName(productName){
    
      return axios.get(`https://data.hakanozdabak.dev/items_get_by_name/${productName}`)

   }
     
}
