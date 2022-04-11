import React from 'react'
import { useLocation } from 'react-router-dom';


const Input = ({ label, inputRef, onChangeInput, placeholder, styleInput }) => {

    const [changedPath, setChangedPath] = React.useState(false)
    const location = useLocation();

    React.useEffect(() => {
        if (location.pathname === '/reception') {
            setChangedPath(true)
        }
    }, [label])

    return (
        <input
            type="text"
            placeholder={placeholder}
            style={styleInput}
            ref={inputRef}
            onChange={!changedPath ? () => onChangeInput(label) : null}
        />
    )
}

export default Input
