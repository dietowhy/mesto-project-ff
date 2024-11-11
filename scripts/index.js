const placeList = document.querySelector('.places__list');

function addCard(element, deleteCard){   
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__image').src = element.link;
    cardElement.querySelector('.card__title').textContent = element.name;

    deleteButton.addEventListener('click', deleteCard);

    return cardElement;
}

function deleteCard(cardElement) {
    cardElement.target.closest('.card').remove();
}

initialCards.forEach(function (cardElement) {
    placeList.append(addCard(cardElement, deleteCard));
})
 

