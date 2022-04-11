import React from 'react';

class PrintFile extends React.Component {
    render() {
        let htmlRecords = null
        let insertHtml = null

        if (this.props.recordsTable) {
            htmlRecords = this.props.recordsTable.outerHTML
            insertHtml = document.getElementById('print')
            insertHtml.insertAdjacentHTML('afterbegin', htmlRecords)
        }

        return <div id='print' style={{padding: '30px 0px'}}></div>;
    }
}

export default PrintFile;
