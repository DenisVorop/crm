import { useSelector, useDispatch } from 'react-redux';
import { getUsersData } from '../../../Redux/Reducers/usersReducer';
// import { getClinicsData } from '../../../Redux/Reducers/clinicsReducer';
import { getLastRecordsData } from '../../../Redux/Reducers/lastRecordsReducer';
import { useEffect } from 'react';

import Record from './Record';

import './records.scss';

const Records = () => {

    const { usersData } = useSelector(({ usersReducer }) => usersReducer);
    // const { clinicsData } = useSelector(({ clinicsReducer }) => clinicsReducer);
    const { lastRecordsData } = useSelector(({ lastRecordsReducer }) => lastRecordsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersData());
        // dispatch(getClinicsData());
        dispatch(getLastRecordsData());
    }, []);

    return (
        <div className="records__body">
            {usersData.map((obj, index) => {
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
