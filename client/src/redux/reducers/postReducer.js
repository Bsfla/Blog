import {
  POSTLOADING_FAILURE,
  POSTLOADING_SUCCESS,
  POSTUPLOAD_FAILURE,
  POSTUPLOAD_REQUEST,
  POSTUPLOAD_SUCCESS,
  POST_REQUEST,
} from "../types";

const initialState = {
  posts: [],
  postDetail: "",
  error: "",
  creatorId: "",
  title: "",
  loading: true,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTLOADING_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case POSTLOADING_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case POSTUPLOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTUPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case POSTUPLOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
