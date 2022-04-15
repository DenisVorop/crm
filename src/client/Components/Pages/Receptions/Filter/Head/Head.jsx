import React from 'react'

import calendar from '../../../../../assets/img/calendar.svg'
import arrowLeft from '../../../../../assets/img/arrow-l.svg'
import arrowRight from '../../../../../assets/img/arrow-r.svg'

import DatePick from './DatePicker/DatePicker'
import Search from '../../../../Common/Search/Search'
import Input from '../../../../Common/Inputs/Input'

const Head = ({ onSearchClick, onToggleCheck, num, receptionsRef }) => {
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
            <Search
                label='Номер карты'
                id="check1"
                onToggleCheck={onToggleCheck}
                onSearchClick={onSearchClick}
            >
                <Input
                    styleInput={{ width: '380px' }}
                    placeholder={!num ? 'Введите ФИО пациента' : 'Введите номер карты пациента'}
                    label='Номер карты'
                    inputRef={receptionsRef}
                />
            </Search>
        </div>
    )
}

export default Head;
