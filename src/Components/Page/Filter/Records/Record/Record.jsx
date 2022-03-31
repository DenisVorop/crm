import React from 'react';

import info from '../../../../../assets/img/Info.svg';

import Informations from './informations/Informations';

const Record = ({ name, age, sex, status, lastRecordsData, timeObj, id, items }) => {

    let statusStyle = {};

    const [infoVisible, setInfoVisible] = React.useState(false);

    const toggleInfoVisible = () => {
        setInfoVisible(!infoVisible);
    };

    const [sortVisible, setSortVisible] = React.useState(false);
    const sortRef = React.useRef();
    const [activeLabel, setActiveLabel] = React.useState(status);

    const toggleSortVisible = () => {
        setSortVisible(!sortVisible);
    };

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setSortVisible(false);
        }
    };

    const onSelectItem = (obj) => {
        setActiveLabel(obj.name)
        setSortVisible(false);
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    switch (activeLabel) {
        case 'Прием завершен': { statusStyle = { background: 'rgba(148, 227, 188, .4)', color: '#31BF79', cursor: 'pointer' }; break; }
        case 'Прием идет': { statusStyle = { background: 'rgba(255, 220, 173, .4)', color: '#FFB149', cursor: 'pointer' }; break; }
        case 'Прием отменен': { statusStyle = { background: 'rgba(254, 64, 33, .4)', color: '#FE4021' }; break; }
        case 'Ожидает прием': { statusStyle = { background: 'rgba(203, 229, 240, 0.3)', color: '#B0DAEC', cursor: 'pointer' }; break; }
        default: { break; }
    }

    return (
        <>
            <div className="records__row">
                <div className="records__person">
                    <div className="records__column time-column">{timeObj.map(time => {
                        if (time.id === id) {
                            return time.time
                        }
                    })}</div>
                    <div className="records__column name-column"><p>{name}</p></div>
                    <div className="records__column sex-column">{sex}, {age}</div>
                    <div className="records__column-item">
                        <div
                        className="records__column status-column"
                        style={statusStyle}
                        ref={sortRef}
                        onClick={activeLabel !== 'Прием отменен' ? toggleSortVisible: null}
                        >
                            <p>{activeLabel}</p>
                            {activeLabel !== 'Прием отменен'
                            ? <svg className={sortVisible ? 'rotated' : 'no-rotated'} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
                            </svg>
                            : null}
                            {sortVisible && (
                                <div className="sort__popup">
                                    <ul>
                                        {items &&
                                            items.map((obj, index) => (
                                                <li
                                                    onClick={() => onSelectItem(obj)}
                                                    className={activeLabel === obj.name ? 'active' : ''}
                                                    key={`${obj.name}_${index}`}>
                                                    {obj.name}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        </div>
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
