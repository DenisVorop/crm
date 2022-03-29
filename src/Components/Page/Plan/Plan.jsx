import React, { useRef } from 'react';
import ReactToPrint from "react-to-print";

import './plan.scss';

import print from '../../../assets/img/print.svg';
import PrintFile from '../../PrintFile/PrintFile';

const Plan = ({ recordsTable, onToNew, onToPat }) => {

    const componentRef = useRef();

    return (
        <div className="plan">
            <div className="plan__container">
                <div className="plan__header">
                    <ReactToPrint
                        trigger={() => {
                            return (
                                <div className="plan__print">
                                    <img src={print} alt="print" />
                                </div>
                            )
                        }}
                        content={() => componentRef.current}
                        documentTitle='Записи на текущую дату и время'
                        pageStyle='print'
                    />
                    <div className="plan__label">План амбулаторного приема</div>
                </div>
                <div className="plan__new new-plan">
                    <div className="new-plan__pat" style={{cursor: 'pointer'}} onClick={onToPat}>Добавить нового пациента</div>
                    <div className="new-plan__rec" style={{cursor: 'pointer'}} onClick={onToNew}>Создать запись</div>
                </div>
            </div>
            <div style={{ display: "none" }}>
                <PrintFile ref={componentRef} recordsTable={recordsTable} />
            </div>
        </div>
    )
}

export default Plan;
