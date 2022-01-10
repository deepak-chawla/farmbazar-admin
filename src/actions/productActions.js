import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productContants'
import axios from 'axios'

const getProductList = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.get(
      'https://farm-bazar-api.herokuapp.com/api/product/getProducts',
      config
    )

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data.products,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

const getProductById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.get(
      `https://farm-bazar-api.herokuapp.com/api/product/get/${id}`,
      config
    )

    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export { getProductList, getProductById }
