import {
  FETCH_ALL,
  FETCH_POST,
  FETCH_BY_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    // start loading
    case START_LOADING:
      return { ...state, isLoading: true };
    // end loading
    case END_LOADING:
      return { ...state, isLoading: false };
    // fetch all data
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    // fetch by search
    case FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload,
      };
    // fetch by id
    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
      };
    // create post
    case CREATE:
      return { ...state, posts: [...state, action.payload] };
    // like post
    case LIKE:
      return {
        ...state,
        posts: state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    // update post
    case UPDATE:
      return {
        ...state,
        posts: state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    // delete post
    case DELETE:
      return {
        ...state,
        posts: state.filter((post) => post._id !== action.payload._id),
      };
    // default
    default:
      return state;
  }
};
