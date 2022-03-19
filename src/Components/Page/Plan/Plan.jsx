import React, { Component } from 'react';
import ReactToPrint from "react-to-print";

import './plan.scss';

import print from '../../../assets/img/print.svg';

class Plan extends Component {
    render() {
        return (
            <div className="plan" ref={el => (this.componentRef = el)}>
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
                            content={() => this.componentRef}
                            documentTitle='new document'
                            pageStyle='print'
                        />
                        <div className="plan__label">План амбулаторного приема</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Plan;
