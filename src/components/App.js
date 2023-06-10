//import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup.js';
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

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
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
      onClose = {closeAllPopups}
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
      onClose = {closeAllPopups}
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
      onClose = {closeAllPopups}
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

    <ImagePopup
      card = {selectedCard}
      onClose = {closeAllPopups}
    />  
  </div>
  );
}

export default App;
