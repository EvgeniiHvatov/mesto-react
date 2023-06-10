import React, { useEffect } from 'react';
import api from '../utils/api';
import initialAvatar from '../images/avatar.jpg';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState('Жак-Ив Кусто')
  const [userDescription, setUserDescription] = React.useState('Исследователь океана')
  const [userAvatar, setUserAvatar] = React.useState(initialAvatar)
  const [cards, setCards] = React.useState([])

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([profileInfo, card]) => {
      setUserName(profileInfo.name)
      setUserDescription(profileInfo.about)
      setUserAvatar(profileInfo.avatar)
      setCards(card)
    }).catch((err) => {
      console.error(err);
    })
  }, [])

  return (
    <>
    <main className="content">
      <section className="profile">
        <div className="profile__container">
        <button onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar-button" type="button"></button>
        <img style={{ backgroundImage: `url(${userAvatar})` }} alt="Ваше фото (аватарка)" className="profile__avatar"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
          <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
      </section>
      <section className="places">
        <ul className="places__list"></ul>
        {cards.map((card) => (
          <Card 
          card = {card}
          key = {card._id}
          name = {card.name}
          link = {card.link}
          likes = {card.likes.length}
          onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
    </>
  );
}

export default Main;