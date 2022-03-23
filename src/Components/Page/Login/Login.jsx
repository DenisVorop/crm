import './login.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <div className="login__body">
                    <div className="login__title">Введите данные для входа</div>
                    <div className="login__login login-login">
                        <div className="login-login__label login-label">Имя пользователя</div>
                        <input type="text" className="login-login__input login-input" placeholder='Введите имя пользователя' />
                    </div>
                    <div className="login__password login-password">
                        <div className="login-password__label login-label">Пароль</div>
                        <input type="text" className="login-password__input login-input" placeholder='Введите пароль' />
                    </div>
                    <a href="#" className="login__button button">Войти в систему</a>
                </div>
            </div>
        </div>
    )
}

export default Login;
