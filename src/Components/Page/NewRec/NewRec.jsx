import './newrec.scss'

import arrowB from '../../../assets/img/arrow-b.svg'
import arrowExit from '../../../assets/img/arrow-exit.svg'

const NewRec = ({ onToRec }) => {
    return (
        <>
            <div className="plan">
                <div className="plan__container">
                    <div className="plan__header" style={{ padding: '3px 0px' }}>
                        <div href='#' className="plan__print" style={{ cursor: 'pointer' }} onClick={onToRec} >
                            <img src={arrowExit} alt="arrow-l" />
                        </div>
                        <div className="plan__label">Создание новой записи</div>
                    </div>
                </div>
            </div>
            <div className='new-rec'>
                <div className="new-rec__container">
                    <div className="new-rec__body">
                        <div className="new-rec__items">
                            <div className="new-rec__item">
                                <div className="new-rec__label">Филиал</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Выберите филиал' />
                                    </div>
                                    <div className="new-rec__img">
                                        <img src={arrowB} alt='arrow-b' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Врач</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Выберите врача' />
                                    </div>
                                    <div className="new-rec__img">
                                        <img src={arrowB} alt='arrow-b' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Отделение</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Выберите отделение' />
                                    </div>
                                    <div className="new-rec__img">
                                        <img src={arrowB} alt='arrow-b' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Пациент</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Выберите пациента' />
                                    </div>
                                    <div className="new-rec__img">
                                        <img src={arrowB} alt='arrow-b' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Номер карты</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Введите номер карты' />
                                    </div>
                                    <div className="new-rec__img">
                                        <img src={arrowB} alt='arrow-b' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Дата</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Выберите дату' />
                                    </div>
                                    <div className="new-rec__img">
                                        <img src={arrowB} alt='arrow-b' />
                                    </div>
                                </div>
                            </div>
                            <div className="new-rec__item">
                                <div className="new-rec__label">Тип записи</div>
                                <div className="new-rec__vvod">
                                    <div className="new-rec__input">
                                        <input type="text" placeholder='Выберите тип записи' />
                                    </div>
                                    <div className="new-rec__img">
                                        <img src={arrowB} alt='arrow-b' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="new-rec__btn">
                            <div className="new-rec__label" style={{cursor: 'pointer'}}>Создать новую запись</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewRec;
