import { usersAPI } from "../../API/api";

const GET_USERS = 'GET_USERS';

//========================================================================================================================================================

const initialState = {
    usersData: [],
}

//=============REDUCER===========================================================================================================================================

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                usersData: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

//============ACTION CREATOR============================================================================================================================================

export const getUsers = (payload) => {
    return {
        type: GET_USERS,
        payload,
    }
}

//============THUNKS============================================================================================================================================

export const getUsersData = () => {
    return async (dispatch) => {
        const response = await usersAPI.getAllUsers()
        if (response.status === 200) {
            dispatch(getUsers(response.data));
            console.log(response);
        }
    }
}

//========================================================================================================================================================

export default usersReducer;
