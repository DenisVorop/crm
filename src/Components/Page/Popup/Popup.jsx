import './popup.scss';

const Popup = ({ popupActive, setPopupActive, children }) => {
    return (
        <div className={popupActive ? 'popup active' : 'popup'} onClick={() => setPopupActive(false)} >
            <div className={popupActive ? 'popup__content active' : 'popup__content'} onClick={e => e.stopPropagation()} >
                {children}
            </div>
        </div>
    )
}

export default Popup;
