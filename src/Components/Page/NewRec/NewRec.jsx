import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import './newrec.scss'

import arrowB from '../../../assets/img/arrow-b.svg'
import arrowExit from '../../../assets/img/arrow-exit.svg'

import { addNewRecord } from '../../../Redux/Reducers/usersReducer';

const NewRec = ({ onToRec }) => {

    const dispatch = useDispatch();

    const onAddRec = (values) => {
        onToRec()
        dispatch(addNewRecord(values))
    }

    return (
        <>
            <Formik
                initialValues={{
                    name_clinic: '',
                    name_doctor: '',
                    separation: '', // отделение
                    pat_name: '',
                    card_num: '',
                    date: '',
                    type: 'Ожидает прием',
                    time: '',
                }}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={(values) => {
                    console.log(values)
                    onAddRec(values)
                }}
            // validationSchema={validationLogin}
            >
                {({ values, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <Form>
                        <div className="plan">
                            <div className="plan__container">
                                <div className="plan__header plan__new" style={{ padding: '3px 0px', cursor: 'pointer'  }} onClick={onToRec}>
                                    <div href='#' className="plan__print" >
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
                                        {/* <div className="new-rec__item">
                                            <div className="new-rec__label">Филиал</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='Выберите филиал'
                                                        name='name_clinic'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                                <div className="new-rec__img">
                                                    <img src={arrowB} alt='arrow-b' />
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">Врач</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='Выберите врача'
                                                        name='name_doctor'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
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
                                                    <input
                                                        type="text"
                                                        placeholder='Выберите отделение'
                                                        name='separation'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                                <div className="new-rec__img">
                                                    <img src={arrowB} alt='arrow-b' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">ФИО пациента</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='Выберите пациента'
                                                        name='pat_name'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
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
                                                    <input
                                                        type="text"
                                                        placeholder='Введите номер карты'
                                                        name='card_num'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                                <div className="new-rec__img">
                                                    <img src={arrowB} alt='arrow-b' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">Время</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="time"
                                                        placeholder='Выберите время'
                                                        name='time'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                                <div className="new-rec__img">
                                                    <img src={arrowB} alt='arrow-b' />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="new-rec__item">
                                            <div className="new-rec__label">Дата</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="date"
                                                        placeholder='Выберите дату'
                                                        name='date'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                                <div className="new-rec__img">
                                                    <img src={arrowB} alt='arrow-b' />
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="new-rec__item">
                                            <div className="new-rec__label">Тип записи</div>
                                            <div className="new-rec__vvod">
                                                <div className="new-rec__input">
                                                    <input
                                                        type="text"
                                                        placeholder='Выберите тип записи'
                                                        name='type'
                                                        value='Ожидает прием'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                </div>
                                                <div className="new-rec__img">
                                                    <img src={arrowB} alt='arrow-b' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="new-rec__btn">
                                        <div className="new-rec__label" style={{ cursor: 'pointer' }} >
                                            <button
                                                disabled={!isValid && !dirty}
                                                onClick={handleSubmit}
                                                type='submit'
                                            >
                                                Создать новую запись
                                            </button>
                                        </div>
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

export default NewRec;
