import calendar from '../../../assets/img/calendar.svg'
import arrowLeft from '../../../assets/img/arrow-l.svg'
import arrowRight from '../../../assets/img/arrow-r.svg'
import loop from '../../../assets/img/loop.svg'

const Head = () => {
    return (
        <div className="filter__head">
            <div className="filter__date date-filter">
                <div className="date-filter__label">Дата</div>
                <div className="date-filter__date">
                    <a href="#" className="date-filter__arrow-l">
                        <img src={arrowLeft} alt="arrow-l" />
                    </a>
                    <input type="text" className="date-filter__choice" />
                    <div className="date-filter__calendar">
                        <img src={calendar} alt="calendar" />
                    </div>
                    <a href="#" className="date-filter__arrow-r">
                        <img src={arrowRight} alt="arrow-r" />
                    </a>
                </div>
            </div>
            <div className="filter__patient patient-filter">
                <div className="patient-filter__card">
                    <div className="patient-filter__label">Номер карты</div>
                    <input type="checkbox" className="patient-filter__checkbox" />
                </div>
                <div className="patient-filter__number">
                    <img src={loop} alt="loop" />
                    <input type="text" className="patient-filter__input"
                        placeholder="Поиск пациентов на текущую дату" />
                    <a href="#" className="patient-filter__search">Найти</a>
                </div>
            </div>
        </div>
    )
}

export default Head;
