import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import './card.scss'

import CardRow from './CardRow/CardRow';
import CardLeft from './CardLeft/CardLeft';
import Information from '../Receptions/Filter/Records/Record/informations/Information/information';
import Plan from '../../Common/Plan/Plan';


const Card = ({ cardInfo }) => {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const labels = ['Фамилия', 'Имя', 'Отчество', 'Пол', 'День рождения', 'Семейное положение', 'Адрес прописки', 'Адрес проживания', 'Телефон', 'Дата первого посещения', 'Дата последнего посещения']

    if (cardInfo[12].last_records.length === 0) {
        cardInfo[12].last_records = [{ position: 'Нет данных' }]
    }

    if (cardInfo === null) {
        return <Navigate to='/cards' />
    } else {
        return (
            <>
                <Plan label='Карта пациента' />
                <div className="card">
                    <div className="card__container">
                        <div className="card__body">
                            <div className="card__info">
                                <div className="card__left left-card">
                                    <div className="left-card__body">
                                        {labels.map((label, index) => {
                                            return (
                                                <CardLeft
                                                    key={`${label}_${index}`}
                                                    label={label}
                                                    cardInfo={cardInfo}
                                                    index={index}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="card__right right-card">
                                    <div className="right-card__body">
                                        {cardInfo[11].card_info.map((card, index) => {
                                            return (
                                                <CardRow
                                                    key={`${card}_${index}`}
                                                    card={card}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="card__last-records last-records-card">
                                <div className="last-records-card__body">
                                    <div className="last-records-card__title">Последние приемы</div>
                                    <div className="last-records-card__records">
                                        {cardInfo[12].last_records.map((obj, index) => {
                                            return (
                                                <div className="last-records-card__record" key={`${obj}_${index}`}>
                                                    <Information
                                                        {...obj}
                                                    />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Card;
