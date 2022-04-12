import React from 'react';

import Filter from './Filter/Filter';
import Plan from '../../Common/Plan/Plan';

const Page = ({ getCardNum }) => {

    const [recordsTable, setRecordsTable] = React.useState(null);

    const takePrintRecord = (recordsTable) => {
        setRecordsTable(recordsTable)
    }

    return (
        <>
            <Plan recordsTable={recordsTable} label='План амбулаторного приема'/>
            <Filter
                takePrintRecord={takePrintRecord}
                getCardNum={getCardNum}
            />
        </>
    )
}

export default Page;
