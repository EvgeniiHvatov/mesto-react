import React from 'react';
//import api from '../utils/api';
//import initialAvatar from '../images/avatar.jpg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, cards, onCardClick}) {
  // const [userName, setUserName] = React.useState('Жак-Ив Кусто')
  // const [userDescription, setUserDescription] = React.useState('Исследователь океана')
  // const [userAvatar, setUserAvatar] = React.useState(initialAvatar)
  // const [cards, setCards] = React.useState([])
  const currentUser = React.useContext(CurrentUserContext);


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
        <button onClick={onEditAvatar}  className="profile__avatar-button" type="button"></button>
        <img src={userAvatar} alt="Ваше фото (аватарка)" className="profile__avatar"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
          <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
      </section>
      <section className="places">
        <ul className="places__list">
        {cards.map((card) => (
          <Card 
          card = {card}
          key = {card._id}
          onCardClick={onCardClick}
          />
        ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;