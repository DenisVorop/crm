import { useState } from 'react';

import Popup from '../../../../Popup/Popup';
import Last from './Information/LastsRecords/Last';
import Information from './Information/information';

// import copy from '../../../assets/img/copy.svg';

import './information.scss';

const Informations = ({ lastRecordsData }) => {

    const [popupActive, setPopupActive] = useState(false);

    return (
        <div className="information">
            <div className="information__container">
                <div className='information__body'>
                    {/* <div className="information__title">Дополнительная информация</div>
                    <div className="information__card card-information">
                        <div className="information__label">Номер карты пациента</div>
                        <div className="card-information__number">
                            <div className="card-information__num">236713</div>
                            <div className="card-information__copy">
                                <span style={{ cursor: 'pointer' }} onClick={() => setPopupActive(true)}><img src={copy} alt="copy" /></span>
                            </div>
                        </div>
                    </div> */}
                    <div className="information__lasts lasts-information">
                        <div className="information__label bold">Последние приемы</div>
                        <div className="lasts-information__records">
                            {lastRecordsData.map((obj, index) => {
                                return (
                                    <Information
                                        key={`${obj}_${index}`}
                                        setPopupActive={setPopupActive}
                                        {...obj} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Popup popupActive={popupActive} setPopupActive={setPopupActive} >
                <Last />
            </Popup>
        </div>
    )
}

export default Informations;
