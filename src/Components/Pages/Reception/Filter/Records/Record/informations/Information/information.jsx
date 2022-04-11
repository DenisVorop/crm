import eye from '../../../../../../../../assets/img/eye.svg';


const Information = ({ setPopupActive, position, name_doctor, date_last_record, name_clinic }) => {
    return (
        <div className="information__last last-information">
            <div className="last-information__doctor">
                <div className="last-information__label">{position}</div>
                <div className="last-information__name">{name_doctor}</div>
            </div>
            <div className="last-information__item">
                <div className="last-information__left">
                    <div className="last-information__date">{date_last_record}</div>
                    <div className="last-information__building">{name_clinic}</div>
                </div>
                <div className="last-information__see">
                    <span style={{ cursor: 'pointer' }} onClick={() => setPopupActive(true)}><img src={eye} alt="eye" /></span>
                </div>
            </div>
        </div>
    )
}

export default Information;
