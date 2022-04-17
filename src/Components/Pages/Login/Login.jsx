import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { setLoginValues } from '../../../Redux/Reducers/authReducer';

import './login.scss'

// -----
import { registrationApi, loginApi } from '../../../API/api';
// -----


const Login = () => {

    const { user } = useSelector(({ authReducer }) => authReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // -----
    const signIn = async (values) => {
        try {
            let data
            data = await loginApi(values.login, values.password)
            // data = await registrationApi(values.login, values.password)
            dispatch(setLoginValues(data));
            navigate('/receptions')
            console.log(user)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    // -----

    const validationLogin = yup.object().shape({
        login: yup.string().typeError('string expected!').required('Введите корректные данные'),
        password: yup.string().typeError('string expected!').required('Введите корректные данные')
    })

    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
            }}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values) => {
                // getLoginValues(values)
                signIn(values)
            }}
            validationSchema={validationLogin}
        >
            {({ errors, touched, values, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <Form>
                    <div className="login">
                        <div className="login__container">
                            <div className="login__body">
                                <div className="login__title">Введите данные для входа</div>
                                <div className="login__login login-login">
                                    <div className="login-login__label login-label">Имя пользователя</div>
                                    <input
                                        className={touched.login && errors.login ? "login-login__input login-input valid-input-error " : "login-login__input login-input"}
                                        placeholder='Введите имя пользователя'
                                        type="login"
                                        name='login'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.login && errors.login && <p className='valid-text-error'>{errors.login}</p>}
                                </div>
                                <div className="login__password login-password">
                                    <div className="login-password__label login-label">Пароль</div>
                                    <input
                                        className={touched.password && errors.password ? "login-password__input login-input valid-input-error " : "login-password__input login-input"}
                                        placeholder='Введите пароль'
                                        type="login"
                                        name='password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.password && errors.password && <p className='valid-text-error'>{errors.password}</p>}
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
