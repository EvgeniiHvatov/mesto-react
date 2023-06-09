import React from 'react';

function Main() {
  return (
    <>
    <main class="content">
      <section class="profile">
        <div class="profile__container">
        <button class="profile__avatar-button" type="button"></button>
        <img src="<%=require('./images/avatar.jpg')%>" alt="Ваше фото (аватарка)" class="profile__avatar"/>
        </div>
        <div class="profile__info">
          <h1 class="profile__title">Жак-Ив Кусто</h1>
          <p class="profile__subtitle">Исследователь океана</p>
          <button type="button" class="profile__edit-button"></button>
        </div>
        <button type="button" class="profile__add-button"></button>
      </section>
      <section class="places">
        <ul class="places__list"></ul>
      </section>
    </main>
    </>
  );
}

handleEditAvatarClick = () => {
  document.querySelector('.popup_opened').classList.add;
}

export default Main;