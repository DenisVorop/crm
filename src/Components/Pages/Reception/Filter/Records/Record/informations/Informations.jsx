import { useState } from 'react';

import Popup from '../../../../../../Common/Popup/Popup';
import Last from './Information/LastsRecords/Last';
import Information from './Information/information';

import './information.scss';

const Informations = ({ last_records }) => {

    const [popupActive, setPopupActive] = useState(false);

    if (last_records.length === 0) {
        last_records = [{ position: 'Нет данных' }]
        console.log(last_records)
    }

    return (
        <div className="information">
            <div className="information__container">
                <div className='information__body'>
                    <div className="information__lasts lasts-information">
                        <div className="information__label bold">Последние приемы</div>
                        <div className="lasts-information__records">
                            {last_records.map((obj, index) => {
                                return (
                                    <Information
                                        key={`${obj}_${index}`}
                                        setPopupActive={setPopupActive}
                                        {...obj}
                                    />
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
