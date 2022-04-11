import { clinicsAPI } from "../../API/api";

const GET_CLINICS_INFO = 'GET_CLINICS_INFO';



const initialState = {
    clinicsData: [],
}



const clinicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLINICS_INFO: {
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



export const getClinicsInfo = (payload) => {
    return {
        type: GET_CLINICS_INFO,
        payload,
    }
}



export const getClinicsData = () => {
    return async (dispatch) => {
        const response = await clinicsAPI.getAllClinics()
        if (response.status === 200) {
            dispatch(getClinicsInfo(response.data));
            console.log(response);
        }
    }
}

export default clinicsReducer;
