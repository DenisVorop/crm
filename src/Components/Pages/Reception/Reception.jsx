import React from 'react'
import { Navigate } from "react-router-dom"
import Button from "../../Common/Button/Button"

import Plan from "../../Common/Plan/Plan"

import './reception.scss'

const Reception = ({ receptionInfo }) => {
    if (receptionInfo === null) { return <Navigate to='/receptions' /> }
    console.log(receptionInfo)

    const { last_name, first_name, patronymic, sex,
        birth, marital_status, reg_addres, fact_addres, card_num,
        phone, first_record, last_record, policy, name, card_info: { card_info },
        last_records: { last_records } } = receptionInfo

    return (
        <>
            <Plan label='Редактирование приема' />
            <div className="reception">
                <div className="reception__container">
                    <div className="reception__body">
                        <div className="reception__title">Осмотр специалиста</div>
                        <div className="reception__admission-info admission-info-reception">
                            <div className="admission-info-reception__column">
                                <div className="admission-info-reception__label">Дата</div>
                                <div className="admission-info-reception__text">15.04.2022</div>
                            </div>
                            <div className="admission-info-reception__column">
                                <div className="admission-info-reception__label">Врач</div>
                                <div className="admission-info-reception__text">Иванова И. Ю.</div>
                            </div>
                            <div className="admission-info-reception__column">
                                <div className="admission-info-reception__label">Пациент</div>
                                <div className="admission-info-reception__text">{name}</div>
                            </div>
                            <div className="admission-info-reception__column">
                                <div className="admission-info-reception__label">Полис ОМС</div>
                                <div className="admission-info-reception__text">{policy}</div>
                            </div>
                            <div className="admission-info-reception__column">
                                <div className="admission-info-reception__label">Номер карты</div>
                                <div className="admission-info-reception__text">{card_num}</div>
                            </div>
                            <div className="admission-info-reception__column">
                                <div className="admission-info-reception__label">Место приема</div>
                                <div className="admission-info-reception__text">Филиал в Новых Черемушках №2</div>
                            </div>
                        </div>
                        <div className="reception__rows">
                            <div className="reception__row">
                                <div className="reception__label">Жалобы</div>
                                <div className="reception__input">
                                    <textarea></textarea>
                                </div>
                            </div>
                            <div className="reception__row">
                                <div className="reception__label">Общий осмотр</div>
                                <div className="reception__input">
                                    <textarea></textarea>
                                </div>
                            </div>
                            <div className="reception__row">
                                <div className="reception__label">Основной диагноз</div>
                                <div className="reception__input">
                                    <textarea></textarea>
                                </div>
                            </div>
                            <div className="reception__row">
                                <div className="reception__label">Рекомендации</div>
                                <div className="reception__input">
                                    <textarea></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reception__save">
                        <Button label='Сохранить изменения' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reception
