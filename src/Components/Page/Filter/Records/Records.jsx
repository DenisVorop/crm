import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUsersData, getTimesData } from '../../../../Redux/Reducers/usersReducer';
import { getLastRecordsData } from '../../../../Redux/Reducers/lastRecordsReducer';

import Record from './Record/Record';

import './records.scss';

const Records = ({ activeUsers, onSearchClick, myRef, printTable }) => {

    const { lastRecordsData } = useSelector(({ lastRecordsReducer }) => lastRecordsReducer);
    const { timesData } = useSelector(({ usersReducer }) => usersReducer);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getUsersData());
        dispatch(getTimesData());
        dispatch(getLastRecordsData());
    }, []);

    React.useEffect(() => {
        setTimeout(onSearchClick, 0);
        setTimeout(printTable, 0);
    }, [lastRecordsData]);

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
                    time={timesData[index].time}
                    key={`${obj}_${index}`}
                    {...obj}
                    lastRecordsData={lastRecordsData}
                />
            })}
        </div>
    )
}

export default Records;
