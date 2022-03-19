import React, { useRef } from 'react';
import ReactToPrint from "react-to-print";

import './plan.scss';

import print from '../../../assets/img/print.svg';
import PrintFile from '../../PrintFile/PrintFile';

const Plan = () => {

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
                        documentTitle='new document'
                        pageStyle='print'
                    />
                    <div className="plan__label">План амбулаторного приема</div>
                </div>
            </div>
            <div style={{ display: "none" }}>
                <PrintFile ref={componentRef} />
            </div>
        </div>
    )
}

export default Plan;
