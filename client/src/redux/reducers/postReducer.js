import { POSTLOADING_FAILURE, POSTLOADING_SUCCESS, POST_REQUEST } from "../types";

const initialState = {
    posts: [],
    postDetail: '',
    error: '',
    creatorId: "",
    title: "",
    loading: true
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REQUEST :
            return {
                ...state,
                loading: true
            };
        case POSTLOADING_SUCCESS :
            return {
                ...state,
                posts: [...state.posts, action.payload],

            };
        case POSTLOADING_FAILURE :
            return {
                ...state,
                loading: false
            };
        default :
           return state;
    }
}