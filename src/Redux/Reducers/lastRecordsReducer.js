import { lastRecordsAPI } from "../../API/api";

const GET_LAST_RECORDS = 'GET_LAST_RECORDS';

//========================================================================================================================================================

const initialState = {
    lastRecordsData: [],
}

//=============REDUCER===========================================================================================================================================

const lastRecordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LAST_RECORDS: {
            return {
                ...state,
                lastRecordsData: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

//============ACTION CREATOR============================================================================================================================================

export const getLastRecords = (payload) => {
    return {
        type: GET_LAST_RECORDS,
        payload,
    }
}

//============THUNKS============================================================================================================================================

export const getLastRecordsData = () => {
    return async (dispatch) => {
        const response = await lastRecordsAPI.getAllLastRecords()
        if (response.status === 200) {
            dispatch(getLastRecords(response.data));
            console.log(response);
        }
    }
}

//========================================================================================================================================================

export default lastRecordsReducer;
