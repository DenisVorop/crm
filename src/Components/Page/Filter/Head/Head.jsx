import React from 'react'

import calendar from '../../../../assets/img/calendar.svg'
import arrowLeft from '../../../../assets/img/arrow-l.svg'
import arrowRight from '../../../../assets/img/arrow-r.svg'
import loop from '../../../../assets/img/loop.svg'

import DatePick from './DatePicker/DatePicker'

const Head = ({onSearchClick, inputRef, onToggleCheck, num}) => {
    return (
        <div className="filter__head">
            <div className="filter__date date-filter">
                <div className="date-filter__label">Дата</div>
                <div className="date-filter__date">
                    <a href="#" className="date-filter__arrow-l">
                        <img src={arrowLeft} alt="arrow-l" />
                    </a>
                    <span className="date-filter__choice">
                        <DatePick />
                    </span>
                    <label className="date-filter__calendar" htmlFor="datepicker">
                        <img src={calendar} alt="calendar" />
                    </label>
                    <a href="#" className="date-filter__arrow-r">
                        <img src={arrowRight} alt="arrow-r" />
                    </a>
                </div>
            </div>
            <div className="filter__patient patient-filter">
                <div className="patient-filter__card">
                    <label className="patient-filter__label" htmlFor="check1">Номер карты</label>
                    <input type="checkbox" className="patient-filter__checkbox" id="check1" onClick={onToggleCheck}/>
                </div>
                <div className="patient-filter__number">
                    <img src={loop} alt="loop" />
                    <input type="text" className="patient-filter__input"
                        // placeholder="Поиск пациентов на текущую дату" ref={num ? cardRef : nameRef} />
                        placeholder={!num ? 'Введите ФИО пациента' : 'Введите номер карты пациента'} ref={inputRef} />
                    <a href="#" className="patient-filter__search" onClick={onSearchClick}>Найти</a>
                </div>
            </div>
        </div>
    )
}

export default Head;
