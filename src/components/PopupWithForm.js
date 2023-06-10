function PopupWithForm({isOpen, onClose, name, title, textButton, children}) {
  return (
    <div className={`popup popup_${name} ${isOpen && `popup_opened`}`}>
      <div className="popup__container">
        <button onClick={onClose} type="button" className="popup__close"></button>
        <h2 className="popup__heading">{title}</h2>
        <form className="popup__form" name={`${name}`} >
          {children}
          <button className="popup__submit popup__submit_disabled" type="submit">{textButton}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;