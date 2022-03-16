import './patientFilter.scss'

import calendar from '../../../assets/img/calendar.svg'
import arrowLeft from '../../../assets/img/arrow-l.svg'
import arrowRight from '../../../assets/img/arrow-r.svg'
import loop from '../../../assets/img/loop.svg'

//========================================================================================================================================================

const PatientFilter = () => {
    return (
        <div className="filter__row">
            <div className="filter__body">
                <div className="filter__date">
                    <div className="filter__label">Дата</div>
                    <div className="filter__item item-filter">
                        <img src={arrowLeft} alt="arrow left" />
                        <div className="item-filter__choice">
                            <div className="filter__choice">
                                <input type="text" />
                            </div>
                            <div className="filter__calendar">
                                <img src={calendar} alt="calendar" />
                            </div>
                        </div>
                        <img src={arrowRight} alt="arrow right" />
                    </div>
                </div>
                <div className="filter__find">
                    <div className="filter__checkbox checkbox-filter">
                        <div className="checkbox-filter__name"></div>
                        <div className="checkbox-filter__toogle">
                            <label for="c_1" class="checkbox__label"><span class="checkbox__text">Номер карты</span></label>
                            <input id="c_1" data-error="Ошибка" class="checkbox__input" type="checkbox" value="1" name="form[]" />
                        </div>
                        <div className="checkbox-filter__input">
                            <img src={loop} alt="loop" />
                            <input type="text" placeholder='Поиск пациентов на текущую дату'/>
                        </div>
                    </div>
                    <div className="filter__button">
                        <button type="submit" class="button">Найти</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientFilter;
