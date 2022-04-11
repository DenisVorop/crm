import React from 'react';
import { useSelector } from 'react-redux';

import Record from './Record/Record';

import './records.scss';


const Records = ({ activeUsers, onSearchClick, myRef, printTable, usersData, getCardNum }) => {

    const { timesData } = useSelector(({ usersReducer }) => usersReducer);

    React.useEffect(() => {
        setTimeout(onSearchClick, 0)
        setTimeout(printTable, 0)
    }, [usersData]);

    return (
        <div className="records__body" ref={myRef}>
            {activeUsers.map((obj, index) => {
                return <Record
                    timeObj={timesData}
                    key={`${obj}_${index}`}
                    {...obj}
                    getCardNum={getCardNum}
                />
            })}
        </div>
    )
}

export default Records;
