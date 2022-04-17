import { Link } from "react-router-dom"


const PatientCard = ({ age, birth, card_num, card_info,
    fact_addres, first_name, first_record,
    last_name, last_record, marital_status, name,
    patronymic, phone, reg_addres, sex, getCardNum, policy, last_records }) => {

    const onRedirectToPatientCard = () => {
        const objPatientCard = [
            last_name, first_name, patronymic, sex,
            birth, marital_status, reg_addres, fact_addres,
            phone, first_record, last_record, card_info = { card_info },
            last_records = { last_records }
        ]
        getCardNum(objPatientCard)
    }

    return (
        <div className="records__row">
            <div className="records__person" style={{ gridTemplateColumns: '3fr 1.3fr 2fr 2fr 2fr' }}>
                <div className="records__column">
                    <p onClick={onRedirectToPatientCard}>
                        <Link to={`/patients/${card_num}`}>
                            {name}
                        </Link>
                    </p>
                </div>
                <div className="records__column">{sex}, {age}</div>
                <div className="records__column">{card_num}</div>
                <div className="records__column">{policy}</div>
                <div className="records__column">{phone}</div>
            </div>
            <div className='info-visible'></div>
        </div>
    )
}

export default PatientCard
