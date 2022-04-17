import React from 'react'
import { useLocation } from 'react-router-dom';


const Input = ({ label, inputRef, onChangeInput, placeholder, styleInput, type }) => {

    const [changedPath, setChangedPath] = React.useState(false)
    const location = useLocation();

    React.useEffect(() => {
        if (location.pathname === '/receptions') {
            setChangedPath(true)
        }
    }, [label])

    return (
        <input
            type={type}
            placeholder={placeholder}
            style={styleInput}
            ref={inputRef}
            onChange={!changedPath ? () => onChangeInput(label) : null}
        />
    )
}

export default Input
