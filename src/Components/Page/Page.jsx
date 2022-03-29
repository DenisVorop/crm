import React from 'react';

import Header from "../Header/Header";
import Filter from './Filter/Filter';
import Plan from './Plan/Plan';

const Page = () => {

    const [recordsTable, setRecordsTable] = React.useState(null);

    const takePrintRecord = (recordsTable) => {
        setRecordsTable(recordsTable)
    }

    return (
        <>
            <Header />
            <Plan recordsTable={recordsTable} />
            <Filter takePrintRecord={takePrintRecord} />
        </>
    )
}

export default Page;
