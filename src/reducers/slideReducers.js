import {
  SLIDE_LIST_REQUEST,
  SLIDE_LIST_SUCCESS,
  SLIDE_LIST_FAIL,
} from '../constants/slideConstants'

export const slideListReducer = (state = { slides: [] }, action) => {
  switch (action.type) {
    case SLIDE_LIST_REQUEST:
      return { loading: true, slides: [] }
    case SLIDE_LIST_SUCCESS:
      return { loding: false, slides: action.payload }
    case SLIDE_LIST_FAIL:
      return { loding: false, error: action.payload }
    default:
      return state
  }
}
