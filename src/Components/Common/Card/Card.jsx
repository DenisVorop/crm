import React from 'react';
import { useNavigate } from 'react-router-dom';

import './card.scss'

import arrowExit from '../../../assets/img/arrow-exit.svg'
import CardRow from './CardRow/CardRow';
import CardLeft from './CardLeft/CardLeft';
import Information from '../../Pages/Reception/Filter/Records/Record/informations/Information/information';


const Card = ({ cardInfo }) => {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const labels = ['Фамилия', 'Имя', 'Отчество', 'Пол', 'День рождения', 'Семейное положение', 'Адрес прописки', 'Адрес проживания', 'Телефон', 'Дата первого посещения', 'Дата последнего посещения']

    return (
        <>
            <div className="plan">
                <div className="plan__container">
                    <div onClick={goBack}>
                        <div className="plan__header plan__new" style={{ padding: '3px 0px', cursor: 'pointer' }}>
                            <div href='#' className="plan__print" >
                                <img src={arrowExit} alt="arrow-l" />
                            </div>
                            <div className="plan__label">Карта пациента</div>
                        </div>
                    </div>
                </div>
            </div>
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

export default Card;
