import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userListReducer } from './reducers/userReducers'
import {
  getProductReducer,
  productListReducer,
} from './reducers/productReducers'
import { orderListReducer } from './reducers/orderListReducers'
import { slideListReducer } from './reducers/slideReducers'

const reducers = combineReducers({
  userLogin: userLoginReducer,
  productList: productListReducer,
  getProduct: getProductReducer,
  userList: userListReducer,
  orderList: orderListReducer,
  slideList: slideListReducer,
})

const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'))

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
