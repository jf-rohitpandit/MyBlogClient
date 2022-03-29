import axios from 'axios'
import {
  COMMENT_POST_FAIL,
  COMMENT_POST_SUCCESS,
  COMMENT_POST_REQUEST,
  COMMENT_GET_FAIL,
  COMMENT_GET_SUCCESS,
  COMMENT_GET_REQUEST,
  CLEAR_COMMENT_ERROR,
} from '../constanst/commentConstant'

export const getComments = (postId) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_GET_REQUEST })

    //axios request
    const result = await axios.get(
      `https://myblogaapp.herokuapp.com/blog/comment/${postId}`,
    )

    dispatch({ type: COMMENT_GET_SUCCESS, payload: result.data.commentList })
  } catch (error) {
    dispatch({ type: COMMENT_GET_FAIL, error: error.response.data.message })
    setTimeout(() => {
      dispatch({ type: CLEAR_COMMENT_ERROR })
    }, 2000)
  }
}

export const postComment = (postId, text) => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_POST_REQUEST })

    //axios request
    const result = await axios.post(
      `https://myblogaapp.herokuapp.com/blog/comment/${postId}`,
      { text },
    )

    dispatch({ type: COMMENT_POST_SUCCESS, payload: result.data.commentList })
  } catch (error) {
    dispatch({ type: COMMENT_POST_FAIL, error: error.response.data.message })
    setTimeout(() => {
      dispatch({ type: CLEAR_COMMENT_ERROR })
    }, 2000)
  }
}
