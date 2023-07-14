import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    //Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleSubmit = handleFormSubmit;
    }

    //Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
    _getInputValues() {
        
    }

    //Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен 
    //не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
    setEventListeners() {
        //super.setEventListeners(); // вызываем родительский метод

        // расширение функциональности родительского класса в наследнике
    }

    //Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
    close() {
        //this._selector.classList.remove('popup_opened');
        //this._removeEventListeners();
    }
}

//Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
