import axios from 'axios'
import {
  LIKE_POST_FAIL,
  LIKE_POST_SUCCESS,
  LIKE_POST_REQUEST,
  LIKE_GET_FAIL,
  LIKE_GET_SUCCESS,
  LIKE_GET_REQUEST,
  CLEAR_LIKE_ERROR,
} from '../constanst/likeConstant'

export const getLikes = (postId) => async (dispatch) => {
  try {
    dispatch({ type: LIKE_GET_REQUEST })

    //axios request

    const result = await axios.get(
      `https://myblogaapp.herokuapp.com/blog/like/${postId}`,
    )

    dispatch({ type: LIKE_GET_SUCCESS, payload: result.data })
  } catch (error) {
    dispatch({ type: LIKE_GET_FAIL, error: error.response.data.message })
    setTimeout(() => {
      dispatch({ type: CLEAR_LIKE_ERROR })
    }, 2000)
  }
}

export const postLike = (postId) => async (dispatch) => {
  try {
    dispatch({ type: LIKE_POST_REQUEST })

    //axios request
    const result = await axios.post(
      `https://myblogaapp.herokuapp.com/blog/like/${postId}`,
    )

    dispatch({ type: LIKE_POST_SUCCESS, payload: result.data })
  } catch (error) {
    dispatch({ type: LIKE_POST_FAIL, error: error.response.data.message })
    setTimeout(() => {
      dispatch({ type: CLEAR_LIKE_ERROR })
    }, 2000)
  }
}
