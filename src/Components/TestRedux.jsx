import { useDispatch } from "react-redux";

import { getUsersData, getClinicsData } from '../Redux/Reducers/UsersReducer.js';

//========================================================================================================================================================

const TestRedux = () => {

    const dispatch = useDispatch();

    const getUsers = () => {
        dispatch(getUsersData());
    }

    const getClinics = () => {
        dispatch(getClinicsData());
    }


    return (
        <>
            <div onClick={() => { getUsers() }} style={{ cursor: "pointer", margin: "0 0 25px 0" }}>get users! --- it's button!!</div>
            <div onClick={() => { getClinics() }} style={{ cursor: "pointer" }}>get clinics! --- it's button!!</div>
        </>
    )
}

export default TestRedux;
