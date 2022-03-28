import { usersAPI } from "../../API/api";

const GET_USERS = 'GET_USERS';
const GET_TIMES = 'GET_TIMES';

//========================================================================================================================================================

const initialState = {
    usersData: [],
    timesData: [],
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
        case GET_TIMES: {
            return {
                ...state,
                timesData: action.payload,
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

export const getTimes = (payload) => {
    return {
        type: GET_TIMES,
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

export const getTimesData = () => {
    return async (dispatch) => {
        const response = await usersAPI.getAllTimeUsers()
        if (response.status === 200) {
            dispatch(getTimes(response.data));
            console.log(response);
        }
    }
}

//========================================================================================================================================================

export default usersReducer;
