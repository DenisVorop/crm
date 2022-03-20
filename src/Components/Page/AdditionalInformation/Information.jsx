import eye from '../../../assets/img/eye.svg';
import copy from '../../../assets/img/copy.svg';

import './information.scss';

const Information = () => {
    return (
        <div className="information">
            <div className="information__container">
                <div className='information__body'>
                    <div className="information__title">Дополнительная информация</div>
                    <div className="information__card card-information">
                        <div className="information__label">Номер карты пациента</div>
                        <div className="card-information__number">
                            <div className="card-information__num">236713</div>
                            <div className="card-information__copy">
                                <a href='#' ><img src={copy} alt="copy" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="information__lasts">
                        <div className="information__label bold">Последние приемы</div>
                        <div className="information__last last-information">
                            <div className="last-information__doctor">
                                <div className="last-information__label">Медицинская сестра (медбрат) участковая</div>
                                <div className="last-information__name">Иванова Г.Ю.</div>
                            </div>
                            <div className="last-information__item">
                                <div className="last-information__date">14.02.2021</div>
                                <div className="last-information__building">Название филиала №2</div>
                                <div className="last-information__see">
                                    <a href='#' ><img src={eye} alt="eye" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="information__last last-information chetnoe">
                            <div className="last-information__doctor">
                                <div className="last-information__label">Медицинская сестра (медбрат) участковая</div>
                                <div className="last-information__name">Иванова Г.Ю.</div>
                            </div>
                            <div className="last-information__item">
                                <div className="last-information__date">14.02.2021</div>
                                <div className="last-information__building">Название филиала №2</div>
                                <div className="last-information__see">
                                    <a href='#' ><img src={eye} alt="eye" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="information__last last-information">
                            <div className="last-information__doctor">
                                <div className="last-information__label">Медицинская сестра (медбрат) участковая</div>
                                <div className="last-information__name">Иванова Г.Ю.</div>
                            </div>
                            <div className="last-information__item">
                                <div className="last-information__date">14.02.2021</div>
                                <div className="last-information__building">Название филиала №2</div>
                                <div className="last-information__see">
                                    <a href='#' ><img src={eye} alt="eye" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;
