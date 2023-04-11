import ProductService from "../../services/productServices"
import axios from "axios";
export const FETCH_ITEMS = "FETCH_ITEMS"
export const FETCH_ITEMS_BY_CATEGORY = "FETCH_ITEMS_BY_CATEGORY"

export const fetchItems = () => async (dispatch) => {
    let productService = new ProductService();
    const response = await productService.getProducts().then();
    const data = response.data
    dispatch({ type: FETCH_ITEMS, payload: data })
};
export const fetchItemsByCategory = (productCategory) => async (dispatch) => {
    let productService = new ProductService();
    const response = await productService.getProductByCategory(productCategory).then();
    const data = response.data
    dispatch({ type: FETCH_ITEMS_BY_CATEGORY, payload: data })
};
