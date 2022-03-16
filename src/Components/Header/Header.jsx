import './header.scss'
import logo from '../../assets/img/logo.svg'
import logout from '../../assets/img/logout.svg'
import print from '../../assets/img/print.svg'

//========================================================================================================================================================

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__body">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header__menu">
                        <div className="header__navigation">
                            <div className="header__links links-header">
                                <div className="links-header__link">Приём пациентов</div>
                                <div className="links-header__link">Карты пациентов</div>
                            </div>
                        </div>
                    </div>
                    <div className="header__end">
                        <div className="header__doctor">Иванова И. Ю.</div>
                        <div className="header__logout">
                            <img src={logout} alt="logout" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom__container">
                <div className="header__bottom">
                    <div className="header__print">
                        <img src={print} alt="print" />
                    </div>
                    <div className="header__plan">План амбулаторного приема</div>
                </div>
            </div>
        </div>
    )
}

export default Header;
