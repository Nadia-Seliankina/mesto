import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(popupSelector, dataCard) {
        super(popupSelector);
        this._name = dataCard.name;
        this._link = dataCard.link;
    }

    // открытие попапа
    open() {
        //super.open(); // вызываем родительский метод
        this._selector.classList.add('popup_opened');
        this.setEventListeners();

        // расширение функциональности родительского класса в наследнике
        this._selector.querySelector('.popup__big-photo').src = this._link;
        this._selector.querySelector('.popup__title-big-image').textContent = this._name;
        this._selector.querySelector('.popup__big-photo').alt = this._name;
    }
}

//Этот класс должен перезаписывать родительский метод open. 
//В методе open класса PopupWithImage нужно вставлять в попап 
//картинку с src изображения и подписью к картинке.
