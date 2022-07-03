import {
  COMMENTLOAD_REQUEST,
  COMMENTLOAD_SUCCESS,
  COMMENTLOAD_FAILURE,
  COMMENTUPLOAD_REQUEST,
  COMMENTUPLOAD_SUCCESS,
  COMMENTUPLOAD_FAILURE,
} from "../types";

const initialState = {
  comments: [],
  loading: false,
};

export const commentReduer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTLOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case COMMENTLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };
    case COMMENTLOAD_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case COMMENTUPLOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENTUPLOAD_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        loading: false,
      };
    case COMMENTUPLOAD_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
