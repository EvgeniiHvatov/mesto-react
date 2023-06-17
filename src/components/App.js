import React, { useEffect } from 'react';

import api from '../utils/api';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  const [currentUser, setCurrentUser] = React.useState({})

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([profileInfo, card]) => {
      setCurrentUser(profileInfo);
      setCards(card)
    }).catch((err) => {
      console.error(err);
    })
  }, [])

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

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <div className="page__container">
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
          onClose = {closeAllPopups}
          name = 'edit-profile'
          title = 'Редактировать профиль'
          textButton = 'Сохранить'>
            <>
              <input className="popup__input popup__input_text_name" id="firstname" name="firstname" placeholder="Имя" type="text" required minLength="2" maxLength="40"/>
              <span className="popup__error" id="firstname-error"></span>
              <input className="popup__input popup__input_text_about" id="about" name="about" placeholder="О себе" type="text" required minLength="2" maxLength="200"/>
              <span className="popup__error" id="about-error"></span>
            </>
        </PopupWithForm>

        <PopupWithForm 
          isOpen = {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
          name = 'edit-avatar'
          title = 'Обновить аватар'
          textButton = 'Сохранить'>
            <>
              <input className="popup__input" id="avatarlink" name="url" type="url" placeholder="Ссылка на аватар" required />
              <span className="popup__error" id="avatarlink-error"></span>
            </>
        </PopupWithForm>

        <PopupWithForm 
          isOpen = {isAddPlacePopupOpen}
          onClose = {closeAllPopups}
          name = 'add-card'
          title = 'Новое место'
          textButton = 'Создать'>
            <>
              <input className="popup__input popup__input_text_name-place" id="nameplace" name="name" placeholder="Название" type="text" required minLength="2" maxLength="30"/>
              <span className="popup__error" id="nameplace-error"></span>
              <input className="popup__input popup__input_text_image-link" id="imagelink" name="link" placeholder="Ссылка на картинку" required type="url"/>
              <span className="popup__error" id="imagelink-error"></span>
            </>
        </PopupWithForm>

        <PopupWithForm 
          name = 'confirmation'
          title = 'Вы уверены?'
        />

        <ImagePopup
          card = {selectedCard}
          onClose = {closeAllPopups}
        />  
      </div>
    </div>
  );
}

export default App;
