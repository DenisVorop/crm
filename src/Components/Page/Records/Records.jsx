import './records.scss';

import info from '../../../assets/img/Info.svg'

const Records = () => {
    return (
        <div className="records__body">
            <div className="records__row">
                <div className="records__column">10:30</div>
                <div className="records__column">Иванов Иван Иванович</div>
                <div className="records__column">М, 34</div>
                <div className="records__column status">Прием завершен</div>
                <div className="records__column">
                    <img src={info} alt="info" />
                </div>
            </div>
        </div>
    )
}

export default Records;
