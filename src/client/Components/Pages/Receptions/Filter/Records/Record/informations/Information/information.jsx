import React from 'react';

import eye from '../../../../../../../../assets/img/eye.svg';


const Information = ({ setPopupActive, position, name_doctor, date_last_record, name_clinic }) => {

    const noDataStyle = { backgroundColor: '#fff', color: '#B7C6CB', fontSize: '18px', padding: '14px 14px 0px 14px', }
    const noDataLabelStyle = { fontWeight: '400' }

    const [noData, setNoData] = React.useState(true)

    React.useEffect(() => {
        if (position === 'Нет данных') {
            setNoData(false)
        }
    }, [position])

    return (
        <div className="information__last last-information" style={noData ? null : noDataStyle}>
            <div className="last-information__doctor">
                <div className="last-information__label" style={noData ? null : noDataLabelStyle}>{position}</div>
                <div className="last-information__name">{name_doctor}</div>
            </div>
            <div className="last-information__item">
                <div className="last-information__left">
                    <div className="last-information__date">{date_last_record}</div>
                    <div className="last-information__building">{name_clinic}</div>
                </div>
                {noData ?
                    <div className="last-information__see">
                        <span className='last-information__more-see'>Посмотреть заключение</span>
                        <span
                            style={{ cursor: 'pointer' }}
                            onClick={() => setPopupActive(true)}
                        >
                            <img src={eye} alt="eye" />
                        </span>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default Information;
