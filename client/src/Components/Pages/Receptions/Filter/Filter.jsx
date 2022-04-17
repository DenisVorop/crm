import React from 'react'
import { useSelector } from 'react-redux';

import Head from "./Head/Head";
import Patients from "../../../Common/Patients/Patients";
import Records from "./Records/Records";

import './filter.scss';


const Filter = ({ getReception }) => {
    const { usersData } = useSelector(({ usersReducer }) => usersReducer);

    const arrUsers = JSON.parse(JSON.stringify(usersData));
    arrUsers.sort((a, b) => a.time_id > b.time_id ? 1 : -1);

    const [activeUsers, setActiveUsers] = React.useState(arrUsers);
    const [num, setNum] = React.useState(false)
    const receptionsRef = React.useRef();

    const onSearchClick = () => {
        let filteredUsers
        if (!num) {
            filteredUsers = arrUsers.filter(user => user.name.toLowerCase().includes(receptionsRef.current.value.toLowerCase()))
        } else {
            filteredUsers = arrUsers.filter(user => user.card_num.toLowerCase().includes(receptionsRef.current.value.toLowerCase()))
        }
        setActiveUsers(filteredUsers)
    }

    const onToggleCheck = () => {
        setNum(!num)
    }

    return (
        <div className="filter">
            <div className="filter__container">
                <Head
                    onSearchClick={onSearchClick}
                    receptionsRef={receptionsRef}
                    onToggleCheck={onToggleCheck}
                    num={num}
                />
                <Patients stylePatients={{gridTemplateColumns: '0.5fr 2fr 1fr 1fr 0.5fr'}}/>
                <Records
                    activeUsers={activeUsers}
                    onSearchClick={onSearchClick}
                    usersData={usersData}
                    getReception={getReception}
                />
            </div>
        </div>
    )
}

export default Filter;
