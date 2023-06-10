import React from 'react';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  return (
    <>
    <main className="content">
      <section className="profile">
        <div className="profile__container">
        <button onClick={onEditAvatar} className="profile__avatar-button" type="button"></button>
        <img src="<%=require('./images/avatar.jpg')%>" alt="Ваше фото (аватарка)" className="profile__avatar"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <p className="profile__subtitle">Исследователь океана</p>
          <button onClick={onEditProfile} type="button" className="profile__edit-button"></button>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
      </section>
      <section className="places">
        <ul className="places__list"></ul>
      </section>
    </main>
    </>
  );
}

export default Main;