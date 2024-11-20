import { openPopup, closePopup} from "./modal";
import {

    imgPopup,
    popupImg,
    popupImgDescr,
    placeList,
    addPopupForm,
    cardName,
    cardLink,
    addPopup
    
} from './constants'

function addCard(cardElement, deleteCard, openImagePopup, cardLike){   
    const cardTemplate = document.querySelector('#card-template').content;
    const cardTemplateCopy = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardTemplateCopy.querySelector('.card__delete-button');
    const cardLikeButton = cardTemplateCopy.querySelector('.card__like-button')

    const cardImage = cardTemplateCopy.querySelector('.card__image');
    const cardAlt = cardTemplateCopy.querySelector('.card__image');
    const cardTitle = cardTemplateCopy.querySelector('.card__title');

    cardImage.src = cardElement.link;
    cardAlt.alt = cardElement.name;
    cardTitle.textContent = cardElement.name;

    cardLikeButton.addEventListener('click', cardLike)

    deleteButton.addEventListener('click', () => deleteCard(cardTemplateCopy));

    cardImage.addEventListener('click', () => openImagePopup(cardTitle.textContent, cardImage.src, cardAlt.alt))

    return cardTemplateCopy;
};

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

function deleteCard(card) {
    card.remove();
};

function renderCards (cardArr){    
    cardArr.forEach(card => {
        placeList.append(addCard(card, deleteCard, openImagePopup, cardLike))
    });
};

function openImagePopup(title, src, alt){
    popupImg.src = src;
    popupImg.alt = alt;
    popupImgDescr.textContent = title;
  
    openPopup(imgPopup);
}

function cardLike(evt){
    evt.target.classList.toggle('card__like-button_is-active');
}

export {renderCards, addMyCard};