import React from 'react';
// import { Navigate } from 'react-router-dom';

import Header from "../Header/Header";
import Filter from './Filter/Filter';
import NewRec from './NewRec/NewRec';
import Plan from './Plan/Plan';

const Page = () => {

    const [recordsTable, setRecordsTable] = React.useState(null);

    const takePrintRecord = (recordsTable) => {
        setRecordsTable(recordsTable)
    }

    const [navToNew, setNavToNew] = React.useState(1);

    const onToNew = () => {
        setNavToNew(2)
    }

    const onToRec = () => {
        setNavToNew(1)
    }

    switch (navToNew) {
        case 1: {
            return (
                <>
                    <Header />
                    <Plan recordsTable={recordsTable} onToNew={onToNew} />
                    <Filter takePrintRecord={takePrintRecord} />
                </>
            )
        }
        case 2: {
            return (
                <>
                    <Header />
                    <NewRec onToRec={onToRec} />
                </>
            )
        }
    }

    // return (
    //     <>
    //         <Header />
    //         <Plan recordsTable={recordsTable} onToNew={onToNew} />
    //         <Filter takePrintRecord={takePrintRecord} />
    //     </>
    // )
}

export default Page;
