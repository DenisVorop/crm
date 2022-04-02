import React from 'react';
import { useSelector } from 'react-redux';

import Record from './Record/Record';

import './records.scss';


const Records = ({ activeUsers, onSearchClick, myRef, printTable, usersData, getCardNum }) => {

    const { lastRecordsData } = useSelector(({ lastRecordsReducer }) => lastRecordsReducer);
    const { timesData } = useSelector(({ usersReducer }) => usersReducer);

    React.useEffect(() => {
        setTimeout(onSearchClick, 0)
        setTimeout(printTable, 0)
    }, [usersData]);

    const sortItems = [
        { name: 'Ожидает прием' },
        { name: 'Прием идет' },
        { name: 'Прием завершен' },
        { name: 'Прием отменен' },
    ];

    return (
        <div className="records__body" ref={myRef}>
            {activeUsers.map((obj, index) => {
                return <Record
                    items={sortItems}
                    timeObj={timesData}
                    key={`${obj}_${index}`}
                    {...obj}
                    lastRecordsData={lastRecordsData}
                    getCardNum={getCardNum}
                />
            })}
        </div>
    )
}

export default Records;
