import {
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userContants'
import axios from 'axios'

const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      'https://farm-bazar-api.herokuapp.com/admin/adminsignIn',
      { email, password },
      config
    )
    const admin = {
      id: data.admin._id,
      fullName: data.admin.fullName,
      email: data.admin.email,
      token: data.token,
    }
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: admin,
    })
    localStorage.setItem('userInfo', JSON.stringify(admin))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  window.location.reload()
  dispatch({
    type: USER_LOGOUT,
  })
}

const getUserList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USERS_REQUEST })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.get(
      'https://farm-bazar-api.herokuapp.com/api/users',
      config
    )
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export { login, logout, getUserList }
