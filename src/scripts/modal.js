function openPopup(element) {
    element.classList.add('popup_is-opened');
    document.addEventListener('keydown', escClosePopup);
    element.addEventListener('click', clickClosePopup);
  }
  
  function closePopup(element) {
    element.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', escClosePopup);
    element.removeEventListener('click', clickClosePopup);
  }
  
  function escClosePopup(evt) {
    if (evt.key === 'Escape') {
      const popup = document.querySelector('.popup_is-opened');
      closePopup(popup);
    }
  }
  
  function clickClosePopup(evt) {
    if (evt.currentTarget === evt.target) {
      const popup = document.querySelector('.popup_is-opened');
      closePopup(popup);
    }
  }

  function popupAnimation(popups) {
      popups.forEach(function (element) {
      element.classList.add("popup_is-animated");
    });
  }

  export { openPopup, closePopup, popupAnimation}