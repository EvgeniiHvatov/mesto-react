function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
      <li className="places__item">
        <button type="button" className="places__delete-card"></button>
        <div onClick={handleClick} className="places__image-container">
          <img src={card.link} alt={card.name} className="places__image"/>
        </div>
        <div className="places__heading">
          <h2 className="places__text">{card.name}</h2>
          <div className="places__likes-container">
            <button type="button" className="places__like"></button>
            <p className="places__likes-indicator">{card.likes.length}</p>
          </div>
        </div>
      </li>
  )
}

export default Card;