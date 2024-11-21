import '../styles/index.css';
import initialCards from "./cards";
import './imageAssets'
import { openPopup, closePopup, popupAnimation} from './modal';
import {addCard, deleteCard, cardLike} from './card'
import{

    editPopup,
    editButton,
    profileName,
    addPopup,
    addButton,
    formEdit,
    nameInput,
    jobInput,
    profileDescr,
    closePopupButtons,
    popups,
    imgPopup,
    popupImg,
    popupImgDescr,
    placeList,
    cardName,
    cardLink
    
} from './constants'

function openImagePopup(title, src, alt){
    popupImg.src = src;
    popupImg.alt = alt;
    popupImgDescr.textContent = title;
  
    openPopup(imgPopup);
}

function addMyCard (evt){
    evt.preventDefault();
    
    const cardObj = {
        name: cardName.value,
        link: cardLink.value,
    }

    const myCard = addCard(cardObj, deleteCard, openImagePopup, cardLike);
    placeList.prepend(myCard);
    closePopup(addPopup);
    evt.target.reset();
}

addPopup.addEventListener('submit', addMyCard);

function editFormSubmit(evt){
    evt.preventDefault();

    const nameInputValue = nameInput.value;
    const jobInputValue = jobInput.value;

    profileName.textContent = nameInputValue;
    profileDescr.textContent = jobInputValue;

    closePopup(editPopup);
}

formEdit.addEventListener('submit', editFormSubmit); 

editButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescr.textContent;
    openPopup(editPopup);
});

addButton.addEventListener('click', () => openPopup(addPopup));

closePopupButtons.forEach(button => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

function renderCards (cardArr){    
    cardArr.forEach(card => {
        placeList.append(addCard(card, deleteCard, openImagePopup, cardLike))
    });
};

popupAnimation(popups)
  
renderCards(initialCards);


