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

function deleteCard(card) {
    card.remove();
};

function cardLike(evt){
    evt.target.classList.toggle('card__like-button_is-active');
}

export {addCard, deleteCard, cardLike};