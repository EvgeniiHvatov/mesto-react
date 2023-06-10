import logo from '../images/logo.svg';
//import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import React from 'react';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
  <div className="page">
    <Header/>
    <Main
     onEditProfile = {handleEditProfileClick}
     onAddPlace = {handleAddPlaceClick}
     onEditAvatar = {handleEditAvatarClick}
     onCardClick = {handleCardClick}
    />
    <Footer/>

    <PopupWithForm 
      isOpen = {isEditProfilePopupOpen}
      name = 'edit-profile'
      title = 'Редактировать профиль'
      children = {
        <>
          <input class="popup__input popup__input_text_name" id="firstname" name="firstname" placeholder="Имя" type="text" required minlength="2" maxlength="40"/>
          <span class="popup__error" id="firstname-error"></span>
          <input class="popup__input popup__input_text_about" id="about" name="about" placeholder="О себе" type="text" required minlength="2" maxlength="200"/>
          <span class="popup__error" id="about-error"></span>
        </>
      }
    />

    <PopupWithForm 
      isOpen = {isEditAvatarPopupOpen}
      name = 'edit-avatar'
      title = 'Обновить аватар'
      children = {
        <>
          <input class="popup__input" id="avatarlink" name="url" type="url" placeholder="Ссылка на аватар" required />
          <span class="popup__error" id="avatarlink-error"></span>
        </>
      }
    />

    <PopupWithForm 
      isOpen = {isAddPlacePopupOpen}
      name = 'add-card'
      title = 'Новое место'
      children = {
        <>
          <input class="popup__input popup__input_text_name-place" id="nameplace" name="name" placeholder="Название" type="text" required minlength="2" maxlength="30"/>
          <span class="popup__error" id="nameplace-error"></span>
          <input class="popup__input popup__input_text_image-link" id="imagelink" name="link" placeholder="Ссылка на картинку" required type="url"/>
          <span class="popup__error" id="imagelink-error"></span>
        </>
      }
    />

    <PopupWithForm 
      name = 'confirmation'
      title = 'Вы уверены?'
    />


    <template id="card">
      <li class="places__item">
        <button type="button" class="places__delete-card"></button>
        <div class="places__image-container">
          <img class="places__image"/>
        </div>
        <div class="places__heading">
          <h2 class="places__text"></h2>
          <div class="places__likes-container">
            <button type="button" class="places__like"></button>
            <p class="places__likes-indicator"></p>
          </div>
        </div>
      </li>
    </template>
    <div class="popup popup_edit-profile">
      <div class="popup__container">
        <button type="button" class="popup__close"></button>
        <h2 class="popup__heading">Редактировать профиль</h2>
        <form class="popup__form" name="edit-profile" novalidate>
          <input class="popup__input popup__input_text_name" id="firstname" name="firstname" placeholder="Имя" type="text" required minlength="2" maxlength="40"/>
          <span class="popup__error" id="firstname-error"></span>
          <input class="popup__input popup__input_text_about" id="about" name="about" placeholder="О себе" type="text" required minlength="2" maxlength="200"/>
          <span class="popup__error" id="about-error"></span>
          <button class="popup__submit popup__submit_disabled" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <section class="popup popup_edit-avatar">
      <div class="popup__container">
        <button type="button" class="popup__close" ></button>
        <h2 class="popup__title">Обновить аватар</h2>
        <form class="popup__form" name="edit-avatar" novalidate>
          <input class="popup__input" id="avatarlink" name="url" type="url" placeholder="Ссылка на аватар" required />
          <span class="popup__error" id="avatarlink-error"></span>
          <button class="popup__submit popup__submit_disabled" type="submit">Сохранить</button>
        </form>
      </div>
    </section>
    <div class="popup popup_add-card">
      <div class="popup__container">
        <button type="button" class="popup__close"></button>
        <h2 class="popup__heading">Новое место</h2>
        <form class="popup__form" name="add-card" novalidate>
          <input class="popup__input popup__input_text_name-place" id="nameplace" name="name" placeholder="Название" type="text" required minlength="2" maxlength="30"/>
          <span class="popup__error" id="nameplace-error"></span>
          <input class="popup__input popup__input_text_image-link" id="imagelink" name="link" placeholder="Ссылка на картинку" required type="url"/>
          <span class="popup__error" id="imagelink-error"></span>
          <button class="popup__submit popup__submit_disabled" type="submit">Создать</button>
        </form>
      </div>
    </div>
    <div class="popup popup_full-image">
      <div class="popup__container popup__container_image">
        <button type="button" class="popup__close"></button>
        <img class="popup__image popup__image_full"/>
        <h2 class="popup__heading popup__heading_caption"></h2>
      </div>
    </div>
    <div class="popup popup_confirmation">
      <div class="popup__container">
        <button type="button" class="popup__close"></button>
        <h2 class="popup__heading">Вы уверены?</h2>
        <form class="popup__form" name="card-del-confirm">
          <button class="popup__submit" type="submit">Да</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default App;
