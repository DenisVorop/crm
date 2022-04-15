import React from 'react'
import { useLocation } from 'react-router-dom'

import loop from '../../../assets/img/loop.svg'

const GeneralInput = ({ label, onSearchClick, children, id, onToggleCheck, inputRef }) => {

    const [changedPath, setChangedPath] = React.useState(false)
    const location = useLocation();

    React.useEffect(() => {
        if (location.pathname === '/receptions') {
            setChangedPath(true)
        }
    }, [label])

    return (
        <div className="patient-filter__number">
            <div className={changedPath ? "patient-filter__card" : ""}>
                <label className="patient-filter__label" htmlFor={id} onChange={onToggleCheck}>{label}</label>
                {changedPath
                    ? <input type="checkbox" className="patient-filter__checkbox" id={id} onChange={onToggleCheck} ref={inputRef}/>
                    : null
                }
            </div>
            {label === 'Поиск по возрасту' || label === 'Поиск по полу' ? null : <img src={loop} alt="loop" />}
            {children}
            {changedPath
                ? <>
                    <button className="patient-filter__search" onClick={onSearchClick}>Найти</button>
                </>
                : null
            }
        </div>
    )
}

export default GeneralInput
