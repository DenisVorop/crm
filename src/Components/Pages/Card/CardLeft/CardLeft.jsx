

const CardLeft = ({ label, index, cardInfo }) => {

    switch (cardInfo[3]) { case 'Ж': { return cardInfo[3] = 'Женский' } case 'М': { return cardInfo[3] = 'Мужской' } }

    return (
        <>
            <div className="card__line">
                <div className="card__label">{label}</div>
                <div className="card__text">{cardInfo[index]}</div>
            </div>
        </>
    )
}

export default CardLeft;
