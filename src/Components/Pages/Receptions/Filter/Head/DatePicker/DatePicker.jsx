import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

import ru from 'date-fns/locale/ru';
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";

import "react-datepicker/dist/react-datepicker.css";
import './datepicker.scss';

const DatePick = () => {
    const [startDate, setStartDate] = React.useState(new Date());
    registerLocale('ru', ru)

    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            id="datepicker"
            dateFormat="d MMMM yyyy"
            locale='ru'
            dateFormatCalendar={"MMM yyyy"}
            minDate={subMonths(new Date(), 6)}
            maxDate={addMonths(new Date(), 6)}
            showMonthYearDropdown
        />
    )
}

export default DatePick;
