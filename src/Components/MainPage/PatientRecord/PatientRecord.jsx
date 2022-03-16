import info from '../../../assets/img/Info.svg'
import './patientRecord.scss'

//========================================================================================================================================================

const PatientRecord = ({name, time, sex, age, status, background, color}) => {
    return (
        <div className="patient__row">
            <div className="patient__time">{time}</div>
            <div className="patient__name">{name}</div>
            <div className="patient__sexage">{sex}, {age}</div>
            <div className="patient__status" style={{background, color }}>{status}</div>
            <div className="patient__info"><img src={info} alt="info circle" /></div>
        </div>
    )
}

export default PatientRecord;
