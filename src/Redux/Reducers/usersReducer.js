import { clinicsAPI, usersAPI } from "../../API/api";

const GET_USERS = 'GET_USERS';
const GET_CLINICS = 'GET_CLINICS';

//========================================================================================================================================================

const initialState = {
    usersData: [],
    clinicsData: [],
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
        case GET_CLINICS: {
            return {
                ...state,
                clinicsData: action.payload,
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

export const getClinics = (payload) => {
    return {
        type: GET_CLINICS,
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

export const getClinicsData = () => {
    return async (dispatch) => {
        const response = await clinicsAPI.getAllClinics()
        if (response.status === 200) {
            dispatch(getClinics(response.data));
            console.log(response);
        }
    }
}

//========================================================================================================================================================

export default usersReducer;
