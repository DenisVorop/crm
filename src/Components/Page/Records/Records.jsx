import { useSelector, useDispatch } from 'react-redux';
import { getUsersData } from '../../../Redux/Reducers/usersReducer';
import { useEffect } from 'react';

import Record from './Record';

import './records.scss';

const Records = () => {

    const { usersData } = useSelector(({ usersReducer }) => usersReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersData());
    }, []);

    return (
        <div className="records__body">
            {usersData.map((obj, index) => {
                return <Record
                    key={`${obj}_${index}`}
                    {...obj}
                />
            })}
        </div>
    )
}

export default Records;
