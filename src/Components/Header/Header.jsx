import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './header.scss'

import logo from '../../assets/img/logo.svg'
import logoutImg from '../../assets/img/logout.svg'

import { logout } from '../../Redux/Reducers/authReducer'


const Header = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const logOff = () => {
        dispatch(logout())
    }



    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="header__body">
                        <div className="header__logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="header__nav">
                            <div className="header__links">
                                <Link
                                    to={'/receptions'}
                                    className={location.pathname === '/receptions' ? "active-link header__link" : "header__link"}
                                >
                                    Приём пациентов
                                </Link>
                                <Link
                                    to={'/cards'}
                                    className={location.pathname === '/cards' ? "active-link header__link" : "header__link"}
                                >
                                    Карты пациентов
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="header__log">
                        <div className="header__name">Иванова И. Ю.</div>
                        <Link to="/login" className="header__button" onClick={logOff}>
                            <img src={logoutImg} alt="logout" />
                        </Link>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default Header;
