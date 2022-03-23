// import { authAPI } from "../../API/api";

const GET_ADMIN = 'GET_ADMIN';

//========================================================================================================================================================

const initialState = {
    login: 'admin',
    password: 'admin',
    admin: [],
}

//=============REDUCER===========================================================================================================================================

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADMIN: {
            return {
                ...state,
                admin: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

//============ACTION CREATOR============================================================================================================================================

export const getAdmin = (payload) => {
    return {
        type: GET_ADMIN,
        payload,
    }
}

//============THUNKS============================================================================================================================================

// export const getAuth = () => {
//     return async (dispatch) => {
//         const response = await authAPI.getAuthAdmin()
//         if (response.status === 200) {
//             dispatch(getAdmin(response.data));
//             console.log(response);
//         }
//     }
// }

//========================================================================================================================================================

export default authReducer;
