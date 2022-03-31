import React from 'react'
import { useSelector } from 'react-redux';

import Head from "./Head/Head";
import Patients from "./Patients/Patients";
import Records from "./Records/Records";

import './filter.scss';


const Filter = ({takePrintRecord}) => {
    const { usersData } = useSelector(({ usersReducer }) => usersReducer);

    const arrUsers = JSON.parse(JSON.stringify(usersData));
    arrUsers.sort((a, b) => a.id > b.id ? 1 : -1);

    const [activeUsers, setActiveUsers] = React.useState(arrUsers);
    const inputRef = React.useRef();

    const [recordsTable, setRecordsTable] = React.useState(null);
    const myRef = React.useRef();

    const printTable = () => {
        setRecordsTable(myRef.current)
        takePrintRecord(recordsTable)
    }

    const onSearchClick = () => {
        const filteredUsers = arrUsers.filter(user => user.name.toLowerCase().includes(inputRef.current.value.toLowerCase()))
        setActiveUsers(filteredUsers)
    }

    return (
        <div className="filter">
            <div className="filter__container">
                <Head onSearchClick={onSearchClick} inputRef={inputRef} />
                <Patients />
                <Records activeUsers={activeUsers} onSearchClick={onSearchClick} myRef={myRef} printTable={printTable} />
            </div>
        </div>
    )
}

export default Filter;
