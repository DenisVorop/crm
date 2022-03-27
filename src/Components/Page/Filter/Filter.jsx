import React from 'react'
import { useSelector } from 'react-redux';

import Head from "../Head/Head";
import Patients from "../Patients/Patients";
import Records from "../Records/Records";

import './filter.scss';


const Filter = () => {

    const { usersData } = useSelector(({ usersReducer }) => usersReducer);
    const [activeUsers, setActiveUsers] = React.useState(usersData);
    const inputRef = React.useRef();

    const onSearchClick = () => {
        const filteredUsers = usersData.filter(user => user.name.toLowerCase().includes(inputRef.current.value.toLowerCase()))
        setActiveUsers(filteredUsers)
    }

    return (
        <div className="filter">
            <div className="filter__container">
                <Head onSearchClick={onSearchClick} inputRef={inputRef} />
                <Patients />
                <Records activeUsers={activeUsers} onSearchClick={onSearchClick} />
            </div>
        </div>
    )
}

export default Filter;
