import React from 'react'
import { useSelector } from 'react-redux';

import Head from "./Head/Head";
import Patients from "./Patients/Patients";
import Records from "./Records/Records";

import './filter.scss';


const Filter = ({ takePrintRecord, getCardNum }) => {
    const { usersData } = useSelector(({ usersReducer }) => usersReducer);

    const arrUsers = JSON.parse(JSON.stringify(usersData));
    arrUsers.sort((a, b) => a.id > b.id ? 1 : -1);

    const [activeUsers, setActiveUsers] = React.useState(arrUsers);
    const [num, setNum] = React.useState(false)
    const inputRef = React.useRef();

    const [recordsTable, setRecordsTable] = React.useState(null);
    const myRef = React.useRef();

    const printTable = () => {
        setRecordsTable(myRef.current)
        takePrintRecord(recordsTable)
    }

    const onSearchClick = () => {
        let filteredUsers
        if (!num) {
            filteredUsers = arrUsers.filter(user => user.name.toLowerCase().includes(inputRef.current.value.toLowerCase()))
        } else {
            filteredUsers = arrUsers.filter(user => user.card_num.toLowerCase().includes(inputRef.current.value.toLowerCase()))
        }
        setActiveUsers(filteredUsers)
    }

    const onToggleCheck = () => {
        setNum(!num)
    }
    console.log(num)

    return (
        <div className="filter">
            <div className="filter__container">
                <Head
                    onSearchClick={onSearchClick}
                    inputRef={inputRef}
                    onToggleCheck={onToggleCheck}
                    num={num}
                />
                <Patients />
                <Records
                    activeUsers={activeUsers}
                    onSearchClick={onSearchClick}
                    myRef={myRef}
                    printTable={printTable}
                    usersData={usersData}
                    getCardNum={getCardNum}
                />
            </div>
        </div>
    )
}

export default Filter;
