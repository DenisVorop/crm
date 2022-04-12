import React from 'react';
import { useSelector } from 'react-redux';
import EmptySearch from '../../../../Common/EmptySearch/EmptySearch';

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
            {activeUsers.length === 0
            ? <EmptySearch />
            : null
            }
        </div>
    )
}

export default Records;
