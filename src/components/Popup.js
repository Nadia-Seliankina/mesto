//открытие и закрытие попапа
export class Popup {
    constructor({ popupSelector }) {
        this._selector = document.querySelector(popupSelector);

        this._handleOverlayCloseBound = this._handleOverlayClose.bind(this);
        this.closeBound = this.close.bind(this);
        this._handleEscCloseBound = this._handleEscClose.bind(this);
    }

    // закрытие попапа клавишей Esc
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
            console.log('esc');
        }
    }

    //закрытие попапов при клике на фон
    _handleOverlayClose(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
            console.log('click');
        }
    }

    // добавляет слушатели
    setEventListeners() {
        this._closeButton = this._selector.querySelector('.popup__button-close');
        this._closeButton.addEventListener('click', this.closeBound);

        this._selector.addEventListener('click', this._handleOverlayCloseBound);
        console.log('SETlistenerCLICK')
    }

    // удаляет слушатели
    _removeEventListeners() {
        document.removeEventListener('keydown', this._handleEscCloseBound);
        console.log('REMOVElistener')
    }

    // открытие попапа
    open() {
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscCloseBound);
    }

    // закрытие попапа
    close() {
        this._selector.classList.remove('popup_opened');
        this._removeEventListeners();
    }
}