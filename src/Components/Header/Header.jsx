import './header.scss'
import logo from '../../assets/img/logo.svg'
import logout from '../../assets/img/logout.svg'

//========================================================================================================================================================

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__body">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header__nav">
                        <div className="header__links">
                            <a href='#' className="header__link">Приём пациентов</a>
                            <a href='#' className="header__link">Карты пациентов</a>
                        </div>
                    </div>
                </div>
                <div className="header__log">
                    <div className="header__name">Иванова И. Ю.</div>
                    <a href="/" className="header__button">
                        <img src={logout} alt="logout" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;
