import { Popup } from './Popup.js'

export class PopupWithConfirmation extends Popup {
    constructor({ popupSelector }, handleFormSubmit = null) {
        super({ popupSelector });
        this._formElement = this._selector.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit;
    }

    // Ему можно назначить обработчик сабмита, чтобы установить id карточки
    // Подмена обработчика
    setHendleSubmit(callback) {
        this._handleFormSubmit = callback;
    }

    
    setEventListeners() {
        super.setEventListeners();
        // добавлять обработчик сабмита формы.
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            // добавим вызов функции _handleFormSubmit
            this._handleFormSubmit();
            console.log('сабмит удаления карточки');
        });
    }
}