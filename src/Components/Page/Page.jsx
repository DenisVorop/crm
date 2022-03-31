import React from 'react';
// import { Navigate } from 'react-router-dom';

import Header from "../Header/Header";
import Filter from './Filter/Filter';
import NewPat from './NewPat/NewPat';
import NewRec from './NewRec/NewRec';
import Plan from './Plan/Plan';

const Page = () => {

    const [recordsTable, setRecordsTable] = React.useState(null);

    const takePrintRecord = (recordsTable) => {
        setRecordsTable(recordsTable)
    }

    const [navToNew, setNavToNew] = React.useState(1);

    const onToRec = () => {
        setNavToNew(1)
    }

    const onToNew = () => {
        setNavToNew(2)
    }

    const onToPat = () => {
        setNavToNew(3)
    }

    switch (navToNew) {
        case 1: { return (<><Header /><Plan recordsTable={recordsTable} onToNew={onToNew} onToPat={onToPat} /><Filter takePrintRecord={takePrintRecord} /></>) }
        case 2: { return (<><Header /><NewRec onToRec={onToRec} /></>) }
        case 3: { return (<><Header /><NewPat onToRec={onToRec}/></>)}
        default: {return }
    }
}

export default Page;
