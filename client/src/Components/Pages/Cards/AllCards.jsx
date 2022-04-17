import React from 'react'
import { useSelector } from 'react-redux';

import Search from '../../Common/Search/Search';

import Input from '../../Common/Inputs/Input';
import InputAge from '../../Common/Inputs/InputAge';
import InputSex from '../../Common/Inputs/InputSex';
import PatientCard from './PatientCard/PatientCard';
import EmptySearch from '../../Common/EmptySearch/EmptySearch';
import Plan from '../../Common/Plan/Plan';
import Patients from '../../Common/Patients/Patients';


const AllCards = ({ getCardNum }) => {

    const { oldUsersData } = useSelector(({ usersReducer }) => usersReducer);

    const arrCards = JSON.parse(JSON.stringify(oldUsersData));
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
            case 'Поиск по номеру карты': { filteredCards = arrCards.filter(user => user.card_num.toLowerCase().includes(cardRef.current.value.toLowerCase())); break; }
            case 'Поиск по ОМС': { filteredCards = arrCards.filter(user => user.policy.toLowerCase().includes(policyRef.current.value.toLowerCase())); break; }
            case 'Поиск по телефону': { filteredCards = arrCards.filter(user => user.phone.toLowerCase().includes(phoneRef.current.value.toLowerCase())); break; }
            default: { filteredCards = arrCards.filter(user => user.name.toLowerCase().includes(nameRef.current.value.toLowerCase())); break; }
        }
        setActiveCards(filteredCards)
    }

    React.useEffect(() => {
        searchChange()
    }, [oldUsersData])

    const onChangeInput = (label) => {
        setLabel(label)
        searchChange()
    }

    const searchParams = [
        { label: 'Поиск по номеру карты', placeholder: 'Номер карты', styleInput: { width: '160px' }, ref: cardRef, type: 'number' },
        { label: 'Поиск по ОМС', placeholder: 'Номер полиса ОМС', styleInput: { width: '223px' }, ref: policyRef, type: 'number' },
        { label: 'Поиск по телефону', placeholder: 'Номер телефона', styleInput: { width: '199px' }, ref: phoneRef, type: 'number' },
        { label: 'Поиск по ФИО', placeholder: 'Введите ФИО пациента', styleInput: { width: '380px' }, ref: nameRef, type: 'text' }
    ]

    return (
        <>
            <Plan />
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
                                    type={obj.type}
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
                <Patients stylePatients={{ gridTemplateColumns: '3fr 1.3fr 2fr 2fr 2fr' }} />
                <div className="records__body">
                    {activeCards.length === 0
                        ? <EmptySearch />
                        : activeCards.map((obj, index) => {
                            return (
                                <PatientCard
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
