import { Form, Formik } from 'formik';
import './login.scss'


const Login = () => {
    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
            }}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={(values) => {
                console.log(values)
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
                                        type="password"
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
