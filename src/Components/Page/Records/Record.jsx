import info from '../../../assets/img/Info.svg';

const Record = ({ name, age, sex, status }) => {

    switch (status) {
        case 'Прием завершен': {
            return (
                <div className="records__row">
                    <div className="records__column">10:30</div>
                    <div className="records__column name-column">{name}</div>
                    <div className="records__column sex-column">{sex}, {age}</div>
                    <div className="records__column status-column" style={{ background: 'rgba(148, 227, 188, .4)', color: '#31BF79' }}>{status}</div>
                    <div className="records__column">
                        <img src={info} alt="info" />
                    </div>
                </div>
            )
        }
        case 'Прием идет': {
            return (
                <div className="records__row">
                    <div className="records__column">10:30</div>
                    <div className="records__column name-column">{name}</div>
                    <div className="records__column sex-column">{sex}, {age}</div>
                    <div className="records__column status-column" style={{ background: 'rgba(255, 220, 173, .4)', color: '#FFB149' }} >{status}</div>
                    <div className="records__column">
                        <img src={info} alt="info" />
                    </div>
                </div>
            )
        }
        case 'Отменен': {
            return (
                <div className="records__row">
                    <div className="records__column">10:30</div>
                    <div className="records__column name-column">{name}</div>
                    <div className="records__column sex-column">{sex}, {age}</div>
                    <div className="records__column status-column" style={{ background: 'rgba(254, 64, 33, .4)', color: '#FE4021' }} >{status}</div>
                    <div className="records__column">
                        <img src={info} alt="info" />
                    </div>
                </div>
            )
        }
        default: {
            return (
                <div className="records__row">
                    <div className="records__column">10:30</div>
                    <div className="records__column name-column">{name}</div>
                    <div className="records__column sex-column">{sex}, {age}</div>
                    <div className="records__column status-column" style={{ background: 'yellow', color: 'black' }} >{status}</div>
                    <div className="records__column">
                        <img src={info} alt="info" />
                    </div>
                </div>
            )
        }
    }
}

export default Record;
