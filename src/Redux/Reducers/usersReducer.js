import { usersAPI } from "../../API/api";

const GET_USERS = 'GET_USERS';
const GET_TIMES = 'GET_TIMES';
// const ADD_PAT = 'ADD_PAT';
const ADD_REC = 'ADD_REC';



const initialState = {
    usersData: [],
    timesData: [],
}



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
        // case ADD_PAT: {
        //     const NewPatientient = {
        //         id: 3,
        //         name: action.payload.surname + ' ' + action.payload.name + ' ' + action.payload.patronymic,
        //         sex: 'M',
        //         age: '20',
        //         status: 'Ожидает прием',
        //         time: '14:00',
        //     };
        //     return {
        //         ...state,
        //         usersData: [...state.usersData, NewPatientient],
        //     };
        // }
        case ADD_REC: {
            const NewRecordord = {
                id: 16,
                time_id: 5,
                name: action.payload.pat_name,
                sex: 'M',
                age: '20',
                card_num: action.payload.card_num,
                status: action.payload.type,
                time: action.payload.time,
            };
            return {
                ...state,
                usersData: [...state.usersData, NewRecordord],
            };
        }
        default: {
            return state;
        }
    }
}



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

// export const addNewPatientient = (payload) => {
//     return ({
//         type: ADD_PAT,
//         payload,
//     })
// }

export const addNewRecord = (payload) => {
    return ({
        type: ADD_REC,
        payload,
    })
}



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



export default usersReducer;
