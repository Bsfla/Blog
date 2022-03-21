import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT_FAILURE, LOGOUT_SUCCESS, LOGOUT_REQUEST } from "../types"
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user:"",
    userId: "",
    userName: "",
    userRole: "",
    errorMsg: "",
    successMsg: ""
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST :
            return {
                ...state,
                errorMsg: "",
                isLoading: true
            }
        
        case LOGIN_SUCCESS :
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                userId: action.payload.userId,
                userName: action.payload.userName,
                userRole: action.payload.userRole,
                errorMsg: ""
            }
        case LOGOUT_FAILURE :
        case LOGIN_FAILURE :
            localStorage.removeItem('token')
            return {
                    ...state,
                    ...action.payload,
                    token: null,
                    isAuthenticated: false,
                    userId: null,
                    userRole: null,
                    errorMsg: action.payload.data.msg
                }
        
                case LOGOUT_REQUEST :
                    return {
                        ...state,
                        errorMsg: "",
                        isLoading: true
                    }
                
                case LOGOUT_SUCCESS :
                    localStorage.removeItem('token')
                    return {
                        isAuthenticated: false,
                        userId: null,
                        userName: null,
                        userRole: null,
                        errorMsg: ""
                    }
                
        
        default : 
          return state;
    }
}

export default authReducer;