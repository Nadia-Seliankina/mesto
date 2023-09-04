export class Api {
    // Универсальный, должен работать с любым API
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    #onResponce(res) {
        return res.ok ? res.json() : res.json().then(errData => Promise.reject(errData));
    }

    // Инфо о пользователе с сервера
    getInfoUser() {
        return fetch(`${this._url}/v1/cohort-73/users/me`, {
            headers: this._headers
        })
        .then(this.#onResponce)
    }
    
    // Начальные карточки с сервера
    getInitialCards() {
        return fetch(`${this._url}/v1/cohort-73/cards`, {
            headers: this._headers
        })
        .then(this.#onResponce)
    }

    getAllInfo() {
        return Promise.all([this.getInfoUser(), this.getInitialCards()])
    }

    // Редактирование профиля
    editProfile(data) {
        return fetch(`${this._url}/v1/cohort-73/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
        .then(this.#onResponce)
    }

    // Обновление аватара пользователя
    editAvatar(data) {
        return fetch(`${this._url}/v1/cohort-73/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.link
            })
        })
        .then(this.#onResponce)
    }

    //getCardById(idCard) {
       // return fetch(`${this._url}/v1/cohort-73/cards/${idCard}`, {
           // headers: this._headers
       // })
        //.then(this.#onResponce)
    //}

    // Удаление карточки
    removeCard(cardId) {
        return fetch(`${this._url}/v1/cohort-73/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(this.#onResponce)
    }

    // Добавление карточки
    addCard(data) {
        return fetch(`${this._url}/v1/cohort-73/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(this.#onResponce)
    }

    // Лайкнуть карточку
    changeLike(cardId, isLiked) {
        return fetch(`${this._url}/v1/cohort-73/cards/likes/${cardId}`, {
            method: isLiked ? 'DELETE' : 'PUT',
            headers: this._headers
        })
        .then(this.#onResponce)
    }
}

//МОИ ДАННЫЕ
//fetch('https://mesto.nomoreparties.co/v1/cohort-73/cards', {
  //headers: {
    //authorization: '0523e71c-6164-4ff4-82c6-ca81e8bb5b70'
  //}
//})
  //.then(res => res.json())
  //.then((result) => {
    //console.log(result);
  //});