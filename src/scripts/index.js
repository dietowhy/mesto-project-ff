import '../styles/index.css';
import initialCards from "./cards";
import './imageAssets'
import { openPopup, closePopup, popupAnimation} from './modal';
import {renderCards, addMyCard} from './card'
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
    popups
    
} from './constants'

function handleFormSubmit(evt){
    evt.preventDefault();

    const nameInputValue = nameInput.value;
    const jobInputValue = jobInput.value;

    profileName.textContent = nameInputValue;
    profileDescr.textContent = jobInputValue;

    closePopup(editPopup);
}

formEdit.addEventListener('submit', handleFormSubmit); 

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

addPopup.addEventListener('submit', addMyCard); 

popupAnimation(popups)
  
renderCards(initialCards);


