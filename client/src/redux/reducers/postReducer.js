import {
  POSTDETAILLOAD_REQUEST,
  POSTDETAILLOAD_SUCCESS,
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
  category: "",
  views: 0,
  date: "",
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
        posts: [...state, action.payload],
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
    case POSTDETAILLOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTDETAILLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        postDetail: action.payload.contents,
        creatorId: action.payload.creator.name,
        title: action.payload.title,
        category: action.payload.category.categoryName,
        views: action.payload.views,
        date: action.payload.date,
      };
    default:
      return state;
  }
};
