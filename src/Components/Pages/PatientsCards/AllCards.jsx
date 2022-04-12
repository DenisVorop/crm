import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Search from '../../Common/Search/Search';

import Input from '../../Common/Inputs/Input';
import InputAge from '../../Common/Inputs/InputAge';
import InputSex from '../../Common/Inputs/InputSex';
import Card from './PatientCard/PatientCard';


const AllCards = ({ getCardNum }) => {

    const { usersData } = useSelector(({ usersReducer }) => usersReducer);

    const arrCards = JSON.parse(JSON.stringify(usersData));
    arrCards.sort((a, b) => a.last_name > b.last_name ? 1 : -1);

    const [activeCards, setActiveCards] = React.useState(arrCards);
    const [label, setLabel] = React.useState('')
    const nameRef = React.useRef();
    const cardRef = React.useRef();
    const policyRef = React.useRef();
    const phoneRef = React.useRef();

    const searchChange = () => {
        let filteredCards
        switch (label) {
            case 'Поиск по номеру карты': {
                filteredCards = arrCards.filter(user => user.card_num.toLowerCase().includes(cardRef.current.value.toLowerCase()))
                break
            }
            case 'Поиск по ОМС': {
                filteredCards = arrCards.filter(user => user.policy.toLowerCase().includes(policyRef.current.value.toLowerCase()))
                break
            }
            case 'Поиск по телефону': {
                filteredCards = arrCards.filter(user => user.phone.toLowerCase().includes(phoneRef.current.value.toLowerCase()))
                break
            }
            default: {
                filteredCards = arrCards.filter(user => user.name.toLowerCase().includes(nameRef.current.value.toLowerCase()))
                break
            }
        }
        setActiveCards(filteredCards)
    }

    React.useEffect(() => {
        searchChange()
    }, [usersData])

    const onChangeInput = (label) => {
        setLabel(label)
        searchChange()
    }

    const searchParams = [
        { label: 'Поиск по номеру карты', placeholder: 'Номер карты', styleInput: { width: '160px' }, ref: cardRef },
        { label: 'Поиск по ОМС', placeholder: 'Номер полиса ОМС', styleInput: { width: '223px' }, ref: policyRef },
        { label: 'Поиск по телефону', placeholder: 'Номер телефона', styleInput: { width: '199px' }, ref: phoneRef },
        { label: 'Поиск по ФИО', placeholder: 'Введите ФИО пациента', styleInput: { width: '380px' }, ref: nameRef }
    ]

    return (
        <>
            <div className="plan">
                <div className="plan__container">
                    <div className="plan__header">
                    </div>
                    <div className="plan__new new-plan">
                        <div className="new-plan__pat" style={{ cursor: 'pointer' }}><Link to='/new-patient'>Добавить нового пациента</Link></div>
                        <div className="new-plan__rec" style={{ cursor: 'pointer' }}><Link to='/new-record'>Создать запись</Link></div>
                    </div>
                </div>
            </div>
            <div className="filter__container">
                <div className="filter__head">
                    {searchParams.map((obj, index) => {
                        return (
                            <Search label={obj.label} key={`${obj}_${index}`} onChangeInput={onChangeInput}>
                                <Input
                                    onChangeInput={onChangeInput}
                                    inputRef={obj.ref}
                                    placeholder={obj.placeholder}
                                    styleInput={obj.styleInput}
                                    label={obj.label}
                                />
                            </Search>
                        )
                    })}
                    <Search label='Поиск по возрасту'>
                        <InputAge />
                    </Search>
                    <Search label='Поиск по полу'>
                        <InputSex />
                    </Search>
                </div>
                <div className="patients__body">
                    <div className="patients__columns" style={{ gridTemplateColumns: '3fr 1.3fr 2fr 2fr 2fr' }}>
                        <div className="patients__column">ФИО пациента</div>
                        <div className="patients__column">Пол, возраст</div>
                        <div className="patients__column">Номер карты</div>
                        <div className="patients__column">Полис ОМС</div>
                        <div className="patients__column">Номер телефона</div>
                    </div>
                    <div className='info-visible'></div>
                </div>
                <div className="records__body">
                    {activeCards.map((obj, index) => {
                        return (
                            <Card
                                key={`${obj}_${index}`}
                                {...obj}
                                getCardNum={getCardNum}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default AllCards;
