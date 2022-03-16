import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PatientRecord from "./PatientRecord";

import { getUsersData } from "../../../Redux/Reducers/usersReducer";


//========================================================================================================================================================

const PatientRecords = () => {

    const dispatch = useDispatch();
    const { usersData } = useSelector(({ usersReducer }) => usersReducer);

    useEffect(() => {
        dispatch(getUsersData());
    }, [])

    return (
        <div className="patient__body">
            {usersData.map((obj, index) => {
                return <PatientRecord
                    key={`${obj}_${index}`}
                    {...obj}
                    background='rgba(255, 203, 219, 0.4)' color='pink'
                />
            })}
            <PatientRecord
                name='Путин Владимир Владимирович' time='9:00' sex='М' age='51' status='Прием завершен'
            />
            <PatientRecord
                name='Артемова Анастасия Михайловна' time='10:30' sex='Ж' age='43' status='Прием завершен'
            />
            <PatientRecord
                name='Улунбекова Алхазмы Натриевна' time='11:00' sex='Ж' age='28' status='Идет прием' background='rgba(255, 220, 173, 0.4)' color='#FFB149'
            />
            <PatientRecord
                name='Хохоткова Анастасия Игнатьевна' time='11:30' sex='Ж' age='36' status='Отменил' background='rgba(255, 0, 0, 0.4)' color='red'
            />
        </div>
    )
}

export default PatientRecords;
