const placeList = document.querySelector('.places__list');

function addCard(CardElement, deleteCard){   
    const cardTemplate = document.querySelector('#card-template').content;
    const cardTemplateCopy = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardTemplateCopy.querySelector('.card__delete-button');

    cardTemplateCopy.querySelector('.card__image').src = CardElement.link;
    cardTemplateCopy.querySelector('.card__image').alt = CardElement.name;
    cardTemplateCopy.querySelector('.card__title').textContent = CardElement.name;

    deleteButton.addEventListener('click', () => deleteCard(cardTemplateCopy));

    return cardTemplateCopy;
}

function deleteCard(card) {
    card.remove();
}

initialCards.forEach(function (card) {
    placeList.append(addCard(card, deleteCard));
})
 

