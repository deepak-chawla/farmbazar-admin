import {
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from '../constants/orderContants'

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true, orders: [] }
    case ORDER_LIST_SUCCESS:
      return { loding: false, orders: action.payload }
    case ORDER_LIST_FAIL:
      return { loding: false, error: action.payload }
    default:
      return state
  }
}
