import { useLocation } from 'react-router-dom';
import './patients.scss';

const Patients = ({ stylePatients }) => {

    const receptionsArr = ['Время', 'ФИО пациента', 'Пол, возраст', 'Статус приема', 'Инфо']
    const cardsArr = ['ФИО пациента', 'Пол, возраст', 'Номер карты', 'Полис ОМС', 'Номер телефона']

    const location = useLocation()

    return (
        <div className="patients__body">
            <div className="patients__columns" style={stylePatients}>
                {location.pathname === '/receptions'
                    ? receptionsArr.map((columnName, index) => {
                        return (
                            <div className="patients__column" key={`${columnName}_${index}`}>{columnName}</div>
                        )
                    })
                    : cardsArr.map((columnName, index) => {
                        return (
                            <div className="patients__column" key={`${columnName}_${index}`}>{columnName}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Patients;
