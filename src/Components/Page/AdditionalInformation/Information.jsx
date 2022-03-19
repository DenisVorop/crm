import './information.scss';

import eye from '../../../assets/img/eye.svg';
import copy from '../../../assets/img/copy.svg';

const Information = ({tableRef}) => {
    return (
        <div class="information">
            <div class="information__container">
                <div class="information__body" ref={tableRef}>
                    <div class="information__title">Дополнительная информация</div>
                    <div class="information__card card-information">
                        <div class="information__label">Номер карты пациента</div>
                        <div class="card-information__number">
                            <div class="card-information__num">236713</div>
                            <div class="card-information__copy">
                                <a href='#' ><img src={copy} alt="copy" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="information__lasts">
                        <div class="information__label bold">Последние приемы</div>
                        <div class="information__last last-information">
                            <div class="last-information__doctor">
                                <div class="last-information__label">Медицинская сестра (медбрат) участковая</div>
                                <div class="last-information__name">Иванова Г.Ю.</div>
                            </div>
                            <div class="last-information__item">
                                <div class="last-information__date">14.02.2021</div>
                                <div class="last-information__building">Название филиала №2</div>
                                <div class="last-information__see">
                                    <a href='#' ><img src={eye} alt="eye" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="information__last last-information chetnoe">
                            <div class="last-information__doctor">
                                <div class="last-information__label">Медицинская сестра (медбрат) участковая</div>
                                <div class="last-information__name">Иванова Г.Ю.</div>
                            </div>
                            <div class="last-information__item">
                                <div class="last-information__date">14.02.2021</div>
                                <div class="last-information__building">Название филиала №2</div>
                                <div class="last-information__see">
                                    <a href='#' ><img src={eye} alt="eye" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="information__last last-information">
                            <div class="last-information__doctor">
                                <div class="last-information__label">Медицинская сестра (медбрат) участковая</div>
                                <div class="last-information__name">Иванова Г.Ю.</div>
                            </div>
                            <div class="last-information__item">
                                <div class="last-information__date">14.02.2021</div>
                                <div class="last-information__building">Название филиала №2</div>
                                <div class="last-information__see">
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
