import { Form, Formik } from 'formik';
// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getAdmin } from '../../../Redux/Reducers/authReducer';

import './login.scss'


const Login = () => {

    const { admin, login, password, isAuth } = useSelector(({ authReducer }) => authReducer);
    const dispatch = useDispatch();

    if (admin.login === login && admin.password === password) {
        console.log('You are login!', isAuth)
        return <Navigate to='/records' />
    } else {
        console.log('Incorrect login or password!')
    }

    const getLoginValues = (values) => {
        dispatch(getAdmin(values));
    }

    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
            }}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values) => {
                getLoginValues(values)
            }}
        // validationSchema={validationLogin}
        >
            {({ values, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <Form>
                    <div className="login">
                        <div className="login__container">
                            <div className="login__body">
                                <div className="login__title">Введите данные для входа</div>
                                <div className="login__login login-login">
                                    <div className="login-login__label login-label">Имя пользователя</div>
                                    <input
                                        className="login-login__input login-input"
                                        placeholder='Введите имя пользователя'
                                        type="login"
                                        name='login'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <div className="login__password login-password">
                                    <div className="login-password__label login-label">Пароль</div>
                                    <input
                                        className="login-password__input login-input"
                                        placeholder='Введите пароль'
                                        type="login"
                                        name='password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <button
                                    className="login__button button"
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    type='submit'
                                >Войти в систему</button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Login;
