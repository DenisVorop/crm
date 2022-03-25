import { useState } from 'react';

import info from '../../../assets/img/Info.svg';
import Informations from '../information/Informations';

const Record = ({ name, age, sex, status, clinicsData, lastRecordsData }) => {

    let statusStyle = {};

    switch (status) {
        case 'Прием завершен': { statusStyle = { background: 'rgba(148, 227, 188, .4)', color: '#31BF79' }; break; }
        case 'Прием идет': { statusStyle = { background: 'rgba(255, 220, 173, .4)', color: '#FFB149' }; break; }
        case 'Отменен': { statusStyle = { background: 'rgba(254, 64, 33, .4)', color: '#FE4021' }; break; }
        default: { statusStyle = { background: 'yellow', color: 'black' }; break; }
    }

    const [infoVisible, setInfoVisible] = useState(false);

    const toggleInfoVisible = () => {
        setInfoVisible(!infoVisible);
    };

    return (
        <>
            <div className="records__row">
                <div className="records__person">
                    <div className="records__column time-column">10:30</div>
                    <div className="records__column name-column">{name}</div>
                    <div className="records__column sex-column">{sex}, {age}</div>
                    <div className="records__column-item">
                        <div className="records__column status-column" style={statusStyle}>{status}</div>
                        <div className="records__column info-column">
                            <span onClick={toggleInfoVisible} style={{ cursor: 'pointer' }}><img src={info} alt="info" /></span>
                        </div>
                    </div>
                </div>
                <div className={!infoVisible ? 'info-visible' : 'info-visible active'}>
                    {infoVisible && <Informations lastRecordsData={lastRecordsData} />}
                </div>
            </div>
        </>
    )
}

export default Record;
