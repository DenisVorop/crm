import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD
import { getUsersData } from '../../../Redux/Reducers/UsersReducer';
=======
import { getUsersData } from '../../../Redux/Reducers/usersReducer';
>>>>>>> cc05b3afd1ab9e2df5ccfaf49afa3b1e36ea88c3

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
