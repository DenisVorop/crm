import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './header.scss'

import logo from '../../../assets/img/logo.svg'
import logoutImg from '../../../assets/img/logout.svg'

import { setLogoutValues } from '../../../Redux/Reducers/authReducer'


const Header = () => {

    const {user} = useSelector(({authReducer}) => authReducer)
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate()

    const logOut = () => {
        dispatch(setLogoutValues({}));
        window.localStorage.removeItem('token')
        navigate('/login')
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
                                    Картотека
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="header__log">
                        <div className="header__name">{user.name}</div>
                        <div className="header__button" onClick={logOut} style={{cursor: 'pointer'}}>
                            <img src={logoutImg} alt="logout" />
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default Header;
