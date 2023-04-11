import { FETCH_ITEMS, FETCH_ITEMS_BY_CATEGORY } from "../actions/filterActions";


const initialState = {
  filterProducts: [],
}

export const filterReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case FETCH_ITEMS:
      let product = payload.map((c) => c)
      if (product) {
        return {
          ...state,
          filterProducts: product
        }
      }
      break;
    case FETCH_ITEMS_BY_CATEGORY:
      let product_by_category = payload.map((c) => c)
      if (product_by_category) {
        return {
          ...state,
          filterProducts: product_by_category
        }
      }
      break;

    default:
      return state;
  }

}