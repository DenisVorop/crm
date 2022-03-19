import { useSelector, useDispatch } from 'react-redux';
import { getUsersData } from '../../../Redux/Reducers/usersReducer.js';

import Record from './Record';

import './records.scss';

const Records = () => {

    const { usersData } = useSelector(({ usersReducer }) => usersReducer);

    const dispatch = useDispatch();

    const getUsers = () => {
        dispatch(getUsersData());
    }

    return (
        <div className="records__body">
            <button onClick={() => { getUsers() }} style={{ cursor: "pointer", margin: "0 0 25px 0" }}>Обновить</button>
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
