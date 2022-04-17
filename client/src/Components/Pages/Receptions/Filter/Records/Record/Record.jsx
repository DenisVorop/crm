import React from 'react';
import { Link } from 'react-router-dom';

import info from '../../../../../../assets/img/Info.svg';
import infoBlue from '../../../../../../assets/img/Info-blue.svg';

import Informations from './informations/Informations';

const Record = ({ age, birth, card_num, card_info,
    fact_addres, first_name, first_record,
    last_name, last_record, marital_status, name,
    patronymic, phone, reg_addres, sex, policy, last_records, timeObj, time_id, status, getReception }) => {

    const onRedirectToReception = () => {
        const objPatientRecord = {
            last_name, first_name, patronymic, sex,
            birth, marital_status, reg_addres, fact_addres, card_num,
            phone, first_record, last_record, policy, name, card_info: { card_info },
            last_records: { last_records }
        }
        getReception(objPatientRecord)
    }

    let statusStyle = {};

    const [infoVisible, setInfoVisible] = React.useState(false);

    const toggleInfoVisible = () => {
        setInfoVisible(!infoVisible);
    };

    switch (status) {
        case 'Прием завершен': { statusStyle = { background: 'rgba(148, 227, 188, .4)', color: '#31BF79' }; break; }
        case 'Первичный прием': { statusStyle = { background: 'rgba(255, 220, 173, .4)', color: '#FFB149' }; break; }
        case 'Послеоперац-ный прием': { statusStyle = { background: 'rgba(254, 64, 33, .4)', color: '#FE4021' }; break; }
        case 'Повторный прием': { statusStyle = { background: 'rgba(203, 229, 240, 0.3)', color: '#B0DAEC' }; break; }
        default: { break; }
    }

    return (
        <>
            <div className="records__row">
                <div className="records__person" style={{ gridTemplateColumns: '0.5fr 2fr 1fr 1fr 0.5fr' }}>
                    <div className="records__column">
                        {timeObj.map(time => {
                            if (time.time_id === time_id) {
                                return time.time
                            }
                        })}
                    </div>
                    <div className="records__column">
                        <p onClick={onRedirectToReception}>
                            <Link to={`/receptions/${card_num}`}>
                                {name}
                            </Link>
                        </p>
                    </div>
                    <div className="records__column">{sex}, {age}</div>
                    <div className="records__column" style={statusStyle}>{status}</div>
                    <div className="records__column">
                        <span onClick={toggleInfoVisible} style={{ cursor: 'pointer' }}>
                            <img src={!infoVisible ? info : infoBlue} alt="info" />
                        </span>
                    </div>
                </div>
                <div className={!infoVisible ? 'info-visible' : 'info-visible active'}>
                    {infoVisible && <Informations last_records={last_records} />}
                </div>
            </div>
        </>
    )
}

export default Record;
