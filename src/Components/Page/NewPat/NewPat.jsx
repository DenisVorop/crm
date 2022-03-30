import { Form, Formik } from 'formik';

import './newpat.scss'

import arrowExit from '../../../assets/img/arrow-exit.svg'

const NewPat = ({ onToRec }) => {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    patronymic: '', // отчество
                    sex: '',
                    fam_status: '',
                    birth: '',
                    reg_addres: '',
                    fact_addres: '',
                    phone: '',

                }}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={(values) => {
                    // getLoginValues(values)
                    console.log(values)
                }}
            // validationSchema={validationLogin}
            >
                {({ values, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <Form>
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
                                                    <input
                                                        type="text"
                                                        placeholder='Имя пациента'
                                                        name='name'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">Фамилия:</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='Фамилия пациента'
                                                        name='surname'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">Отчество:</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='Отчество пациента (при наличии)'
                                                        name='patronymic'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">Пол:</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input" style={{ display: 'flex', width: '366px' }}>
                                                    <div className="new-rec__s" style={{ marginRight: '17px' }}>
                                                        <input
                                                            type="checkbox"
                                                            style={{ width: '17px' }}
                                                            id='choice-m'
                                                            name='sex'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        <label className="new-rec__sex" htmlFor="choice-m">М</label>
                                                    </div>
                                                    <div className="new-rec__s">
                                                        <input
                                                            type='checkbox'
                                                            style={{ width: '17px' }}
                                                            id='choice-f'
                                                            name='sex'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        <label className="new-rec__sex" htmlFor="choice-f">Ж</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">Семейное положение:</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='Семейное положение'
                                                        name='fam_status'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">День рождения:</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='Дата рождения'
                                                        name='birth'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">Адрес прописки:</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='Адрес прописки'
                                                        name='reg_addres'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">Адрес проживания:</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='Адрес проживания'
                                                        name='fact_addres'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">Телефон:</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='Номер телефона'
                                                        name='phone'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">Дата первого посещения:</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='12.04.2021'
                                                        name='login'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">Дата последнего посещения:</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='23.05.2021'
                                                        name='login'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="new-rec__btn" style={{ width: '280px', margin: '20px 0px', float: 'right', cursor: 'pointer' }}>
                                    <div className="new-rec__label">
                                        <button
                                            disabled={!isValid && !dirty}
                                            onClick={handleSubmit}
                                            type='submit'
                                            style={{ width: 'auto' }}
                                            >
                                            Создать карту пациента
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default NewPat;
