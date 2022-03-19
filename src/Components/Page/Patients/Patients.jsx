import './patients.scss';

const Patients = () => {
    return (
        <div className="patients__body">
            <div className="patients__columns">
                <div className="patients__column time">Время</div>
                <div className="patients__column name">ФИО пациента</div>
                <div className="patients__column sex">Пол, возраст</div>
                <div className="patients__column status">Статус приема</div>
                <div className="patients__column info">Инфо</div>
            </div>
        </div>
    )
}

export default Patients;
