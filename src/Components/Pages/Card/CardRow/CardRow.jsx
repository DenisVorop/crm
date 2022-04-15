import React from 'react';

import arrowB from '../../../../assets/img/arrow-b.svg'
import arrowT from '../../../../assets/img/arrow-t.svg'

const CardRow = ({ card }) => {

    const [visible, setVisible] = React.useState(false);

    const onToggleVisible = () => {
        setVisible(!visible)
    }

    let inspection;
    switch (card.system) {
        case 'Общий осмотр': {
            inspection = (
                <>
                    <div className="card__label">{card.label_sub}</div>
                    <div className="card__text">
                        <p>Самочувствие: {card.symptoms_sub[1]}</p>
                    </div>
                    <div className="card__label">{card.label_ob}</div>
                    <div className="card__text">
                        <p>Оценка общего состояния: {card.symptoms_ob[1]}</p>
                        <p>Состояние сознания: {card.symptoms_ob[2]}</p>
                        <p>Положение: {card.symptoms_ob[3]}</p>
                        <p>Телосложение: {card.symptoms_ob[4]}</p>
                        <p>Конституциональный тип: {card.symptoms_ob[5]}</p>
                        <p>Рост: {card.symptoms_ob[6]}</p>
                        <p>Масса тела: {card.symptoms_ob[7]}</p>
                    </div>
                </>
            )
            break;
        }
        case 'Система органов дыхания': {
            inspection = (
                <>
                    <div className="card__label">{card.label_sub}</div>
                    <div className="card__text">
                        <p>Носовое дыхание: {card.symptoms_sub[1]}</p>
                        <p>Насморк: {card.symptoms_sub[2]}</p>
                        <p>Носовые кровотечения: {card.symptoms_sub[3]}</p>
                        <p>Обоняние: {card.symptoms_sub[4]}</p>
                        <p>Боли в горле при глотании: {card.symptoms_sub[5]}</p>
                    </div>
                    <div className="card__label">{card.label_ob}</div>
                    <div className="card__text">
                        <p>Осмотр носа: {card.symptoms_ob[1]}</p>
                        <p>Осмотр шеи: {card.symptoms_ob[2]}</p>
                        <p>Щитовидная железа: {card.symptoms_ob[3]}</p>
                        <p>Форма грудной клетки: {card.symptoms_ob[4]}</p>
                    </div>
                </>
            )
            break;
        }
        case 'Мочеполовая система': {
            inspection = (
                <>
                    <div className="card__label">{card.label_sub}</div>
                    <div className="card__text">
                        <p>Носовое дыхание: {card.symptoms_sub[1]}</p>
                        <p>Насморк: {card.symptoms_sub[2]}</p>
                        <p>Носовые кровотечения: {card.symptoms_sub[3]}</p>
                        <p>Обоняние: {card.symptoms_sub[4]}</p>
                        <p>Боли в области придаточных пазух: {card.symptoms_sub[5]}</p>
                        <p>Боли в горле при глотании: {card.symptoms_sub[6]}</p>
                        <p>Боли в гортани при разговоре: {card.symptoms_sub[7]}</p>
                        <p>Изменения голоса: {card.symptoms_sub[8]}</p>
                        <p>Кашель: {card.symptoms_sub[9]}</p>
                        <p>Мокрота: {card.symptoms_sub[10]}</p>
                        <p>Кровохарканье: {card.symptoms_sub[11]}</p>
                        <p>Боли в грудной клетке, связанные с дыханием и кашлем: {card.symptoms_sub[12]}</p>
                        <p>Одышка: {card.symptoms_sub[13]}</p>
                        <p>Удушье: {card.symptoms_sub[14]}</p>
                    </div>
                    <div className="card__label">{card.label_ob}</div>
                    <div className="card__text">
                        <p>Осмотр носа: {card.symptoms_ob[1]}</p>
                        <p>Осмотр шеи: {card.symptoms_ob[2]}</p>
                        <p>Щитовидная железа: {card.symptoms_ob[3]}</p>
                        <p>Форма грудной клетки: {card.symptoms_ob[4]}</p>
                        <p>Состояние надключичных ямок: {card.symptoms_ob[5]}</p>
                        <p>Тип дыхания: {card.symptoms_ob[6]}</p>
                    </div>
                </>
            )
            break;
        }
        case 'Сердечно-сосудистая система': {
            inspection = (
                <>
                    <div className="card__label">{card.label_sub}</div>
                    <div className="card__text">
                        <p>Боли и другие неприятные ощущения (чувство тяжести, жжения, сдавления и т. п.) в области сердца и за грудиной: {card.symptoms_sub[1]}</p>
                        <p>Сердцебиение: {card.symptoms_sub[2]}</p>
                        <p>Одышка: {card.symptoms_sub[3]}</p>
                        <p>Удушье: {card.symptoms_sub[4]}</p>
                        <p>Кашель, кровохарканье: {card.symptoms_sub[5]}</p>
                        <p>Боли и чувство тяжести в правом подреберье: {card.symptoms_sub[6]}</p>
                        <p>Отеки на ногах: {card.symptoms_sub[7]}</p>
                    </div>
                    <div className="card__label">{card.label_ob}</div>
                    <div className="card__text">
                        <p>Осмотр сосудов шеи: {card.symptoms_ob[1]}</p>
                        <p>Осмотр сердечной области: {card.symptoms_ob[2]}</p>
                        <p>Верхушечный толчок: {card.symptoms_ob[3]}</p>
                        <p>Пальпация: {card.symptoms_ob[4]}</p>
                        <p><b>Перкуссия сердца</b></p>
                        <p>Шумы: {card.symptoms_ob[5]}</p>
                        <p>Пульс на лучевых артериях: {card.symptoms_ob[6]}</p>
                    </div>
                </>
            )
            break;
        }
        case 'Система органов пищеварения': {
            inspection = (
                <>
                    <div className="card__label">{card.label_sub}</div>
                    <div className="card__text">
                        <p>Аппетит, вкусовые ощущения, слюнотечение: {card.symptoms_sub[1]}</p>
                        <p>Жажда. Жевание. Глотание, изжога, отрыжка, тошнота, рвота (характер рвотных масс): {card.symptoms_sub[2]}</p>
                        <p>Боль: {card.symptoms_sub[3]}</p>
                        <p>Стул: {card.symptoms_sub[4]}</p>
                        <p>Испражнения: {card.symptoms_sub[5]}</p>
                    </div>
                    <div className="card__label">{card.label_ob}</div>
                    <div className="card__text">
                        <p>Запах изо рта: {card.symptoms_ob[1]}</p>
                        <p>Слизистая губ: {card.symptoms_ob[2]}</p>
                        <p>Язык: {card.symptoms_ob[3]}</p>
                        <p>Миндалины: {card.symptoms_ob[4]}</p>
                    </div>
                </>
            )
            break;
        }
        case 'Мочеполовая система': {
            inspection = (
                <>
                    <div className="card__label">{card.label_sub}</div>
                    <div className="card__text">
                        <p>Боли в поясничной области: {card.symptoms_sub[1]}</p>
                        <p>Боли в области мочевого пузыря: {card.symptoms_sub[2]}</p>
                        <p>Нарушения мочеотделения: {card.symptoms_sub[3]}</p>
                        <p>Внешний вид мочи: {card.symptoms_sub[4]}</p>
                    </div>
                    <div className="card__label">{card.label_ob}</div>
                    <div className="card__text">
                        <p>Осмотр области поясницы (выбухание): {card.symptoms_ob[1]}</p>
                    </div>
                </>
            )
            break;
        }
        case 'Нервная система и органы чувств': {
            inspection = (
                <>
                    <div className="card__label">{card.label_sub}</div>
                    <div className="card__text">
                        <p>Характеристика интеллекта: {card.symptoms_sub[1]}</p>
                        <p>Настроение: {card.symptoms_sub[2]}</p>
                        <p>{card.symptoms_sub[3]}</p>
                    </div>
                </>
            )
            break;
        }
    }

    return (
        <div className="card__row">
            <div className="card__inspection" onClick={onToggleVisible}>
                <div className="card__arrow">
                    <img src={!visible ? arrowB : arrowT} alt="arrow" />
                </div>
                <div className="card__system">{card.system}</div>
            </div>
            {visible
                ? <div className="card__line">
                    {inspection}
                </div>
                : null}
        </div>
    )
}

export default CardRow;
