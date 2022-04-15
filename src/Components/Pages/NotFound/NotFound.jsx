import './notfound.scss'

import eyes from '../../../assets/img/eyes.svg'
import Plan from '../../Common/Plan/Plan';

const Notfound = () => {
    return (
        <>
            <Plan label='Вернуться назад' />
            <div className="not-found">
                <div className="not-found__container">
                    <div className="not-found__body">
                        <div className="not-found__left left-not-found">
                            <div className="left-not-found__title">Мы не смогли найти страницу, на которую вы перешли</div>
                            <div className="left-not-found__label">Вернитесь назад или перейдите на одну из вкладок выше</div>
                        </div>
                        <div className="not-found__right right-not-found">
                            <div className="right-not-found__body">
                                <div className="right-not-found__label">404</div>
                                <div className="right-not-found__image">
                                    <img src={eyes} alt="eyes" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notfound;
