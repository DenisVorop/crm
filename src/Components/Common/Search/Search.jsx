import GeneralInput from "../GeneralInput/GeneralInput";


const Search = ({ label, onToggleCheck, id, onSearchClick, onChangeInput, children }) => {
    return (
        <div className="filter__patient patient-filter">
            <GeneralInput
                label={label}
                onSearchClick={onSearchClick}
                onChangeInput={onChangeInput}
                onToggleCheck={onToggleCheck}
                id={id}
            >
                {children}
            </GeneralInput>
        </div>
    )
}

export default Search;
