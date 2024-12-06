import '../styles/index.css';
import initialCards from "./cards";
import {enableValidation, clearValidation} from "./validation"
import './imageAssets'
import { openPopup, closePopup, popupAnimation} from './modal';
import {addCard, deleteCard, cardLike} from './card'
import {getUserInfo, getInitialCards, updateUserInfo, addNewCard, updateUserAvatar} from './api'
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
    cardLink,
    validationConfig,
    addNewAvatarPopup,
    profileImage,
    editAvatarForm,
    avatarSubmitButton,
    profileSubmitButton,
    addMyCardSubmitButton
    
} from './constants'

enableValidation(validationConfig)

function openImagePopup(title, src, alt){
    popupImg.src = src;
    popupImg.alt = alt;
    popupImgDescr.textContent = title;
  
    openPopup(imgPopup);
}

profileImage.addEventListener('click', () => {
    openPopup(addNewAvatarPopup);
    clearValidation(editAvatarForm, validationConfig);
});

function editAvatarFormSubmit(evt) {
    evt.preventDefault();
  
    const originalButtonText = avatarSubmitButton.textContent;
    avatarSubmitButton.textContent = 'Сохранение...';
  
    const avatarInput = editAvatarForm.querySelector("#new-ava");
    const newAvatarUrl = avatarInput.value;
  
    updateUserAvatar(newAvatarUrl)
      .then(data => {
        profileImage.style.backgroundImage = `url(${data.avatar})`;
    })
      .catch(err => {
        console.error('Ошибка обновления:', err);
    })
    .finally(() => {
        avatarSubmitButton.textContent = originalButtonText;
        closePopup(addNewAvatarPopup);
    })
}

editAvatarForm.addEventListener("submit", editAvatarFormSubmit);

function editProfileFromSubmit(evt){
    evt.preventDefault();

    const originalButtonText = profileSubmitButton.textContent;
    profileSubmitButton.textContent = 'Сохранение...';

    const nameInputValue = nameInput.value;
    const jobInputValue = jobInput.value;

    updateUserInfo(nameInputValue, jobInputValue)
        .then(data => {
            profileName.textContent = data.name;
            profileDescription.textContent = data.about;
        })
        .catch(err => {
            console.error('Ошибка при обновлении профиля:', err);
        })
        .finally(() => {
            profileSubmitButton.textContent = originalButtonText;
            closePopup(editPopup);
        });
}

formEdit.addEventListener('submit', editProfileFromSubmit); 

function addMyCardSubmit (evt){
    evt.preventDefault();

    const originalButtonText = addMyCardSubmitButton.textContent;
    addMyCardSubmitButton.textContent = 'Сохранение...';

    const cardObj = {
        name: cardName.value,
        link: cardLink.value,
    }

    addNewCard(cardObj)
        .then(data => {
            placeList.prepend(addCard(data, deleteCard, openImagePopup, cardLike, userId));
            addPopup.reset()
        })
        .catch(err => {
            console.error('Ошибка при обновлении профиля:', err);
        })
        .finally(() => {
            addMyCardSubmitButton.textContent = originalButtonText;
            closePopup(addPopup);
        });
}

addPopup.addEventListener('submit', addMyCardSubmit);

editButton.addEventListener('click', () => {
    openPopup(editPopup);
    clearValidation(editPopup, validationConfig)
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescr.textContent; 
});

addButton.addEventListener('click', () => {
    openPopup(addPopup);
    clearValidation(addPopup, validationConfig)
})
closePopupButtons.forEach(button => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

let userId

Promise.all([getUserInfo(), getInitialCards()])
  .then(([userData, cardsData]) => {
    profileName.textContent = userData.name;
    profileDescr.textContent = userData.about;
    userId = userData._id;

    cardsData.forEach(card => {
      placeList.append(addCard(card, deleteCard, openImagePopup, cardLike, userId));
    });
})
.catch(err => console.error(err));

popupAnimation(popups)
  


