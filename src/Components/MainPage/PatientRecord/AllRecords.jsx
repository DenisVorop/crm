import PatientRecords from './PatientRecords';

import '../PatientRecord/patientRecord.scss'

//========================================================================================================================================================

const AllRecords = () => {

    return (
        <>
            <div className="records__row">
                <div className="records__time">Время</div>
                <div className="records__name">ФИО пациента</div>
                <div className="records__sexage">Пол, возраст</div>
                <div className="records__status">Статус приема</div>
                <div className="records__info">Инфо</div>
            </div>
            <PatientRecords />
        </>
    )
}

export default AllRecords;
