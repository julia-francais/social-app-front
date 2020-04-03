import { SET_POSTS, LIKE_POST, UNLIKE_POST, LOADING_DATA } from "../types";

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case LIKE_POST:
      let index1 = state.posts.findIndex(
        post => post.postId === action.payload.postId
      );
      state.posts[index1] = action.payload;
      return {
        ...state
      };
    case UNLIKE_POST:
      let index2 = state.posts.findIndex(
        post => post.postId === action.payload.postId
      );
      state.posts[index2] = action.payload;
      return {
        ...state
      };
    default:
      return state;
  }
}
