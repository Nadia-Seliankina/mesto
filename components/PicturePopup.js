import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor({ popupSelector }) {
        super({ popupSelector });
    }

    // открытие попапа
    open(name, link) {
        //перезаписывает родительский метод open
        super.open();

        super.setEventListeners();

        this._selector.querySelector('.popup__big-photo').src = link;
        this._selector.querySelector('.popup__title-big-image').textContent = name;
        this._selector.querySelector('.popup__big-photo').alt = name;
    }
}
