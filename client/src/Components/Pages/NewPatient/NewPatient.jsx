import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

// import { addNewPatientient } from '../../../Redux/Reducers/usersReducer';

import './newpatient.scss'

import Plan from '../../Common/Plan/Plan';
import Button from '../../Common/Button/Button';
// import { useDispatch } from 'react-redux';

const NewPatient = () => {

    // const dispatch = useDispatch();
    const navigate = useNavigate();

    // const onAddPatient = (values) => {
    // dispatch(addNewPatientient(values))
    // }

    const phoneRegExp = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/ //eslint-disable-line

    const validationNewPatient = yup.object().shape({
        name: yup.string().typeError('string expected!').required('Введите корректные данные'),
        surname: yup.string().typeError('string expected!').required('Введите корректные данные'),
        patronymic: yup.string().typeError('string expected!').required('Введите корректные данные'),
        fam_status: yup.string().typeError('string expected!').required('Введите корректные данные'),
        birth: yup.string().typeError('string expected!').required('Введите корректные данные'),
        reg_addres: yup.string().typeError('string expected!').required('Введите корректные данные'),
        fact_addres: yup.string().typeError('string expected!').required('Введите корректные данные'),
        phone: yup.string().required('Введите корректные данные').matches(phoneRegExp, 'Номер телефона введен не верно')
    })

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
                    console.log(values)
                    // onAddPatient(values)
                    navigate('/receptions')
                }}
                validationSchema={validationNewPatient}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <>
                        <Plan label='Создание новой карты пациента' />
                        <Form>
                            <div className='new-rec'>
                                <div className="new-rec__container" >
                                    <div className="new-rec__body" style={{ width: 'auto' }}>
                                        <div className="new-rec__items" style={{ width: 'auto' }}>
                                            <div className="new-rec__item">
                                                <div className="new-rec__label">Имя:</div>
                                                <div className="new-rec__vvod">
                                                    <div className="new-rec__input">
                                                        <input
                                                            className={touched.name && errors.name ? "valid-input-error" : ""}
                                                            type="text"
                                                            placeholder='Имя пациента'
                                                            name='name'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.name && errors.name && <p className='valid-text-error'>{errors.name}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new-rec__item">
                                                <div className="new-rec__label">Фамилия:</div>
                                                <div className="new-rec__vvod">
                                                    <div className="new-rec__input">
                                                        <input
                                                            className={touched.surname && errors.surname ? "valid-input-error" : ""}
                                                            type="text"
                                                            placeholder='Фамилия пациента'
                                                            name='surname'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.surname && errors.surname && <p className='valid-text-error'>{errors.surname}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new-rec__item">
                                                <div className="new-rec__label">Отчество:</div>
                                                <div className="new-rec__vvod">
                                                    <div className="new-rec__input">
                                                        <input
                                                            className={touched.patronymic && errors.patronymic ? "valid-input-error" : ""}
                                                            type="text"
                                                            placeholder='Отчество пациента (при наличии)'
                                                            name='patronymic'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.patronymic && errors.patronymic && <p className='valid-text-error'>{errors.patronymic}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new-rec__item">
                                                <div className="new-rec__label">Пол:</div>
                                                <div className="new-rec__vvod">
                                                    <div className="new-rec__input" style={{ display: 'flex', width: '366px' }}>
                                                        <div className="new-rec__s" style={{ marginRight: '17px' }}>
                                                            <input
                                                                className={touched.patronymic && errors.patronymic ? "valid-input-error" : ""}
                                                                type="radio"
                                                                style={{ width: '17px' }}
                                                                id='choice-m'
                                                                name='sex'
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                            {touched.login && errors.login && <p className='valid-text-error'>{errors.login}</p>}
                                                            <label className="new-rec__sex" htmlFor="choice-m">М</label>
                                                        </div>
                                                        <div className="new-rec__s">
                                                            <input
                                                                className={touched.patronymic && errors.patronymic ? "valid-input-error" : ""}
                                                                type='radio'
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
                                                            className={touched.fam_status && errors.fam_status ? "valid-input-error" : ""}
                                                            type="text"
                                                            placeholder='Семейное положение'
                                                            name='fam_status'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.fam_status && errors.fam_status && <p className='valid-text-error'>{errors.fam_status}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new-rec__item">
                                                <div className="new-rec__label">День рождения:</div>
                                                <div className="new-rec__vvod">
                                                    <div className="new-rec__input">
                                                        <input
                                                            className={touched.birth && errors.birth ? "valid-input-error" : ""}
                                                            type="date"
                                                            placeholder='Дата рождения'
                                                            name='birth'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.birth && errors.birth && <p className='valid-text-error'>{errors.birth}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new-rec__item">
                                                <div className="new-rec__label">Адрес прописки:</div>
                                                <div className="new-rec__vvod">
                                                    <div className="new-rec__input">
                                                        <input
                                                            className={touched.reg_addres && errors.reg_addres ? "valid-input-error" : ""}
                                                            type="text"
                                                            placeholder='Адрес прописки'
                                                            name='reg_addres'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.reg_addres && errors.reg_addres && <p className='valid-text-error'>{errors.reg_addres}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new-rec__item">
                                                <div className="new-rec__label">Адрес проживания:</div>
                                                <div className="new-rec__vvod">
                                                    <div className="new-rec__input">
                                                        <input
                                                            className={touched.fact_addres && errors.fact_addres ? "valid-input-error" : ""}
                                                            type="text"
                                                            placeholder='Адрес проживания'
                                                            name='fact_addres'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.fact_addres && errors.fact_addres && <p className='valid-text-error'>{errors.fact_addres}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new-rec__item">
                                                <div className="new-rec__label">Телефон:</div>
                                                <div className="new-rec__vvod">
                                                    <div className="new-rec__input">
                                                        <input
                                                            className={touched.phone && errors.phone ? "valid-input-error" : ""}
                                                            type="text"
                                                            placeholder='Номер телефона'
                                                            name='phone'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.phone && errors.phone && <p className='valid-text-error'>{errors.phone}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new-rec__item">
                                                <div className="new-rec__label">Дата первого посещения:</div>
                                                <div className="new-rec__vvod">
                                                    <div className="new-rec__input">
                                                        <input
                                                            className={touched.login && errors.login ? "valid-input-error" : ""}
                                                            type="text"
                                                            placeholder='12.04.2021'
                                                            name='login'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.login && errors.login && <p className='valid-text-error'>{errors.login}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="new-rec__item">
                                                <div className="new-rec__label">Дата последнего посещения:</div>
                                                <div className="new-rec__vvod">
                                                    <div className="new-rec__input">
                                                        <input
                                                            className={touched.login && errors.login ? "valid-input-error" : ""}
                                                            type="text"
                                                            placeholder='23.05.2021'
                                                            name='login'
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        {touched.login && errors.login && <p className='valid-text-error'>{errors.login}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="new-rec__btn" disabled={!isValid && !dirty} onClick={handleSubmit} >
                                            <Button label='Создать карту пациента' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </>
    )
}

export default NewPatient;

