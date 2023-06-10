function Card({card, name, link, likes, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
      <li className="places__item">
        <button type="button" className="places__delete-card"></button>
        <div className="places__image-container">
          <img onClick={handleClick} src={link} alt={name} className="places__image"/>
        </div>
        <div className="places__heading">
          <h2 className="places__text">{name}</h2>
          <div className="places__likes-container">
            <button type="button" className="places__like"></button>
            <p className="places__likes-indicator">{likes}</p>
          </div>
        </div>
      </li>
  )
}

export default Card;