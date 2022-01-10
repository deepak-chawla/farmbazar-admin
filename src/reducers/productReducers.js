import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productContants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { loding: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { loding: false, error: action.payload }
    default:
      return state
  }
}

export const getProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true, product: {} }
    case GET_PRODUCT_SUCCESS:
      return { loding: false, product: action.payload }
    case GET_PRODUCT_FAIL:
      return { loding: false, error: action.payload }
    default:
      return state
  }
}
