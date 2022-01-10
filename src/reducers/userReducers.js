import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from '../constants/userContants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loding: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loding: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { loading: true, users: [] }
    case GET_USERS_SUCCESS:
      return { loding: false, users: action.payload }
    case GET_USERS_FAIL:
      return { loding: false, error: action.payload }
    default:
      return state
  }
}
