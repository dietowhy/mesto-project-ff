export const popups = document.querySelectorAll(".popup");
export const editPopup = document.querySelector('.popup_type_edit');
export const addPopup = document.querySelector('.popup_type_new-card')
export const imgPopup = document.querySelector('.popup_type_image');
export const popupImg = imgPopup.querySelector('.popup__image');
export const popupImgDescr = imgPopup.querySelector('.popup__caption');
export const addNewAvatarPopup = document.querySelector('.popup_type-new-ava');
export const profileImage = document.querySelector('.profile__image');
export const editAvatarForm = document.querySelector(".popup_type-new-ava .popup__form");
export const addPopupForm = document.forms['new-place'];
export const cardName = addPopupForm.elements['place-name'];
export const cardLink = addPopupForm.elements['link'];

export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const closePopupButtons = document.querySelectorAll('.popup__close');

export const profileName = document.querySelector('.profile__title');
export const profileDescr = document.querySelector('.profile__description');
export const formEdit = document.forms['edit-profile'];
export const nameInput = formEdit.elements.name;
export const jobInput = formEdit.elements.description;

export const placeList = document.querySelector('.places__list');

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};












