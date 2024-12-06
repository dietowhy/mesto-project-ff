import {deleteCardById, cardLikeServer} from './api'

function addCard(cardElement, deleteCard, openImagePopup, cardLike, userId){   
    const cardTemplate = document.querySelector('#card-template').content;
    const cardTemplateCopy = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardTemplateCopy.querySelector('.card__delete-button');
    const cardLikeButton = cardTemplateCopy.querySelector('.card__like-button')
    const likeCounter = cardTemplateCopy.querySelector('.card__like-count')

    const cardImage = cardTemplateCopy.querySelector('.card__image');
    const cardTitle = cardTemplateCopy.querySelector('.card__title');

    cardImage.src = cardElement.link;
    cardImage.alt = cardElement.name;
    cardTitle.textContent = cardElement.name;
    likeCounter.textContent = cardElement.likes.length;

    if(cardElement.owner._id === userId){
        deleteButton.addEventListener('click', () => deleteCard(cardElement._id, cardTemplateCopy))
    }
    else{
        deleteButton.style.display = 'none'
    }

    if(cardElement.likes.some(like => like._id === userId)){
        cardLikeButton.classList.add('card__like-button_is-active')
    }

    cardLikeButton.addEventListener('click', () => cardLike(cardLikeButton, likeCounter, cardElement._id))
    cardImage.addEventListener('click', () => openImagePopup(cardTitle.textContent, cardImage.src, cardImage.alt))

    return cardTemplateCopy;
};

function deleteCard(cardId, card) {
    deleteCardById(cardId)
    .then(() => {
        card.remove();
    })
    .catch(err => console.error('Ошибка удаления:', err))
};

function cardLike(cardLikeButton, likeCounter, cardId){
    const isLiked = cardLikeButton.classList.contains('card__like-button_is-active');

    cardLikeServer(cardId, isLiked)
        .then(data => {
            likeCounter.textContent = data.likes.length;
            cardLikeButton.classList.toggle('card__like-button_is-active');
        })
        .catch(err => {
            console.error('Ошибка оценки:', err);
        })
}

export {addCard, deleteCard, cardLike};