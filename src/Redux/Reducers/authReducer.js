const GET_ADMIN = 'GET_ADMIN';
const LOGOUT = 'LOGOUT';



const initialState = {
    login: 'admin',
    password: 'admin',
    admin: [],
    isAuth: false,
}



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADMIN: {
            return {
                ...state,
                admin: action.payload,
                isAuth: true,
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isAuth: false,
            }
        }
        default: {
            return state;
        }
    }
}



export const getAdmin = (payload) => {
    return {
        type: GET_ADMIN,
        payload,
    }
}



export const logout = () => {
    return {
        type: LOGOUT
    }
}



export default authReducer;
