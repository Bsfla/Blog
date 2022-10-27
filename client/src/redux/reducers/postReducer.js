import {
  CATEGORY_REQUEST_FAILURE,
  CATEGORY_REQUEST_SUCCESS,
  POSTDELETE_SUCCESS,
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
  categories: [],
  contents: "",
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
        posts: [...action.payload.postFindResult],
        categories: [...action.payload.categoryFindResult],
        isLoadig: false,
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
        contents: action.payload.contents,
        creatorId: action.payload.creator.name,
        title: action.payload.title,
        category: action.payload.category.categoryName,
        views: action.payload.views,
        date: action.payload.date,
      };

    case CATEGORY_REQUEST_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case CATEGORY_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
