import './newpat.scss'

import arrowExit from '../../../assets/img/arrow-exit.svg'

const NewPat = ({ onToRec }) => {
    return (
        <>
            <div className="plan">
                <div className="plan__container">
                    <div className="plan__header" style={{ padding: '3px 0px' }}>
                        <div href='#' className="plan__print" style={{ cursor: 'pointer' }} onClick={onToRec}>
                            <img src={arrowExit} alt="arrow-l" />
                        </div>
                        <div className="plan__label">Создание новой карты пациента</div>
                    </div>
                </div>
            </div>
            <div className='new-rec'>
                <div className="new-rec__container" style={{ paddingBottom: '60px' }}>
                    <div className="new-rec__body" style={{ width: 'auto', padding: '30px 78px 45px 78px' }}>
                        <div className="new-rec__items" style={{ width: 'auto' }}>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Имя:</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Имя пациента' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Фамилия:</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Фамилия пациента' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Отчество:</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Отчество пациента (при наличии)' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Пол:</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input" style={{ display: 'flex', width: '366px' }}>
                                        <div className="new-rec__s" style={{ marginRight: '17px' }}>
                                            <input type="checkbox" style={{ width: '17px' }} id='choice-m' />
                                            <label className="new-rec__sex" htmlFor="choice-m">М</label>
                                        </div>
                                        <div className="new-rec__s">
                                            <input type='checkbox' style={{ width: '17px' }} id='choice-f' />
                                            <label className="new-rec__sex" htmlFor="choice-f">Ж</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Семейное положение:</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Семейное положение' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">День рождения:</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Дата рождения' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Адрес прописки:</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Адрес прописки' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Адрес проживания:</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Адрес проживания' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Телефон:</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Номер телефона' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Дата первого посещения:</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='12.04.2021' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Дата последнего посещения:</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='23.05.2021' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="new-rec__btn" style={{ width: '280px', margin: '20px 0px', float: 'right' }}>
                        <div className="new-rec__label" style={{ cursor: 'pointer' }}>Создать карту пациента</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPat;
