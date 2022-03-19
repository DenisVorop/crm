import './patients.scss';

const Patients = () => {
    return (
        <div className="patients__body">
            <div className="patients__columns">
                <div className="patients__column">Время</div>
                <div className="patients__column">ФИО пациента</div>
                <div className="patients__column sex">Пол, возраст</div>
                <div className="patients__column">Статус приема</div>
                <div className="patients__column">Инфо</div>
            </div>
        </div>
    )
}

export default Patients;
