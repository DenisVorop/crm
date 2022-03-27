import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUsersData } from '../../../Redux/Reducers/usersReducer';
import { getLastRecordsData } from '../../../Redux/Reducers/lastRecordsReducer';

import Record from './Record';

import './records.scss';

const Records = ({ activeUsers, onSearchClick }) => {

    const { lastRecordsData } = useSelector(({ lastRecordsReducer }) => lastRecordsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersData());
        dispatch(getLastRecordsData());
    }, []);

    useEffect(() => {
        setTimeout(onSearchClick, 0);
    }, [lastRecordsData]);

    return (
        <div className="records__body">
            {activeUsers.map((obj, index) => {
                return <Record
                    key={`${obj}_${index}`}
                    {...obj}
                    lastRecordsData={lastRecordsData}
                />
            })}
        </div>
    )
}

export default Records;
