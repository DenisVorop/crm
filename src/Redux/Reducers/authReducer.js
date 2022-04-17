const SET_LOGIN = 'GET_ADMIN';
const SET_LOGOUT = 'SET_LOGOUT';



const initialState = {
    user: [],
    isAuth: false,
}



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN: {
            return {
                ...state,
                user: action.payload,
                isAuth: true,
            }
        }
        case SET_LOGOUT: {
            return {
                ...state,
                user: action.payload,
                isAuth: false,
            }
        }
        default: {
            return state;
        }
    }
}



export const setLoginValues = (payload) => {
    return {
        type: SET_LOGIN,
        payload,
    }
}
export const setLogoutValues = (payload) => {
    return {
        type: SET_LOGOUT,
        payload,
    }
}



export default authReducer;
