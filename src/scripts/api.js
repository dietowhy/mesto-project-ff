const config = {
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-mag-4",
    headers: {
        authorization: "ec96e4dc-a1c9-4dfd-8c69-14c9fd0a29ed",
        'Content-Type': 'application/json'
    }
}

function getResponseData (res){
    if(res.ok){
        return res.json(res)
    }
    else {
        return Promise.reject(`Ошибка: ${res.status}`)
    }
}

function getUserInfo(){
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
    .then(res => {
        return getResponseData(res);
    })
    .then(data => {
        return data;
    })
}

function getInitialCards (){
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
    .then(res => {
        return getResponseData(res);
    })
    .then(cardData => {
        return cardData
    })
}

function updateUserInfo (userName, userJob){
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: userName,
            about: userJob
          })
    })
    .then(res => {
        return getResponseData(res);
    })
}

function addNewCard (newCard){
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(newCard)
    })
    .then(res => {
        return getResponseData(res);
    })
}

function deleteCardById(cardId){
    return fetch(`${config.baseUrl}/cards/${cardId} `,{
        method: 'DELETE',
        headers: config.headers
    })
    .then(res => {
        return getResponseData(res);
    })
}

function cardLikeServer (cardId, isLiked){
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: isLiked ? 'DELETE' : 'PUT',
        headers: config.headers
    })
    .then(res => {
        return getResponseData(res);
    })
}

function updateUserAvatar (userInfo){
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: userInfo
        })
    })
    .then(res => {
        return getResponseData(res);
    })
}

export {getUserInfo, getInitialCards, updateUserInfo, addNewCard, deleteCardById, cardLikeServer, updateUserAvatar}


