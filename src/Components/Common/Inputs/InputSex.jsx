const InputSex = ({ label, nameRef, onChangeInput }) => {
    return (
        <div className="patient-filter__number" style={{ marginLeft: '-45px' }}>
            <label className="patient-filter__label">{label}</label>
            <div className='filter-sex' style={{ marginRight: '10px' }}>
                <input type="checkbox" style={{ border: '2px solid #FFFFFF', borderRadius: '2px', width: '17px', height: '17px', background: '#33B1CA' }} value='М' />
                <div className='filter-sex__option'>М</div>
            </div>
            <div className='filter-sex'>
                <input type="checkbox" style={{ border: '2px solid #FFFFFF', borderRadius: '2px', width: '17px', height: '17px', background: '#33B1CA' }} value='Ж' />
                <div className='filter-sex__option'>Ж</div>
            </div>
        </div>
    )
}

export default InputSex
