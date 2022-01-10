import {
  SLIDE_LIST_REQUEST,
  SLIDE_LIST_SUCCESS,
  SLIDE_LIST_FAIL,
} from '../constants/slideConstants'
import axios from 'axios'

const getSlideList = () => async (dispatch) => {
  try {
    dispatch({
      type: SLIDE_LIST_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.get(
      'https://farm-bazar-api.herokuapp.com/api/slide/show',
      config
    )

    dispatch({
      type: SLIDE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SLIDE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export { getSlideList }
