import axios from 'axios'
import {
  BLOG_HOME_FAIL,
  BLOG_HOME_REQUEST,
  BLOG_HOME_SUCCESS,
  BLOG_TRENDING_FAIL,
  BLOG_TRENDING_REQUEST,
  BLOG_TRENDING_SUCCESS,
  BLOG_POST_FAIL,
  BLOG_POST_REQUEST,
  BLOG_POST_SUCCESS,
  BLOG_GET_REQUEST,
  BLOG_GET_SUCCESS,
  BLOG_GET_FAIL,
  CLEAR_BLOG_ERROR,
} from '../constanst/blogConstant'

export const postBlog = (blogData) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_POST_REQUEST })

    await axios.post('https://myblogaapp.herokuapp.com/blog', {
      title: blogData.title,
      content: blogData.content,
    })

    dispatch({ type: BLOG_POST_SUCCESS })
  } catch (error) {
    dispatch({ type: BLOG_POST_FAIL, error: error.response.data.message })
    setTimeout(() => {
      dispatch({ type: CLEAR_BLOG_ERROR })
    }, 2000)
  }
}

export const getHomeBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_HOME_REQUEST })

    //axios request
    const result = await axios.get('https://myblogaapp.herokuapp.com/blog')

    dispatch({ type: BLOG_HOME_SUCCESS, payload: result.data.posts })
  } catch (error) {
    dispatch({ type: BLOG_HOME_FAIL, error: error.response.data.message })
    setTimeout(() => {
      dispatch({ type: CLEAR_BLOG_ERROR })
    }, 2000)
  }
}

export const getTrendingBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: BLOG_TRENDING_REQUEST })

    //axios request
    const result = await axios.get(
      'https://myblogaapp.herokuapp.com/blog/trending',
    )

    dispatch({ type: BLOG_TRENDING_SUCCESS, payload: result.data.posts })
  } catch (error) {
    dispatch({ type: BLOG_TRENDING_FAIL, error: error.response.data.message })
    setTimeout(() => {
      dispatch({ type: CLEAR_BLOG_ERROR })
    }, 2000)
  }
}

export const getBlog = (postId) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_GET_REQUEST })

    //axios request
    const result = await axios.get(
      `https://myblogaapp.herokuapp.com/blog/post/${postId}`,
    )

    dispatch({ type: BLOG_GET_SUCCESS, payload: result.data.post })
  } catch (error) {
    dispatch({ type: BLOG_GET_FAIL, error: error.response.data.message })
    setTimeout(() => {
      dispatch({ type: CLEAR_BLOG_ERROR })
    }, 2000)
  }
}
