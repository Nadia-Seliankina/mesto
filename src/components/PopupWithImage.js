import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor({ popupSelector }) {
        super({ popupSelector });
        this._bigPhoto = this._selector.querySelector('.popup__big-photo');
        this._titlePhoto = this._selector.querySelector('.popup__title-big-image');
    }

    // открытие попапа
    open(name, link) {
        //перезаписывает родительский метод open
        super.open();

        this._bigPhoto.src = link;
        this._titlePhoto.textContent = name;
        this._bigPhoto.alt = name;
    }
}
