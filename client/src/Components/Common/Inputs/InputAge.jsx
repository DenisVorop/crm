const InputAge = ({ label, nameRef, onChangeInput }) => {
    return (
        <div className="patient-filter__number" style={{ marginLeft: '-45px' }}>
            <label className="patient-filter__label">{label}</label>
            <div style={{ marginRight: '10px', fontSize: '18px' }}>от</div>
            <input type="number" placeholder='18' style={{ width: '53px', paddingLeft: '9px', marginRight: '10px' }} />
            <div style={{ marginRight: '10px', fontSize: '18px' }}>до</div>
            <input type="number" placeholder='65' style={{ width: '53px', paddingLeft: '9px', marginRight: '10px' }} />
        </div>
    )
}

export default InputAge
