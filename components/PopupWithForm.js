import { Popup } from './Popup.js'
import { closeButtons } from '../utils/constants.js'

export class PopupWithForm extends Popup {
    //Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
    constructor({ popupSelector, handleFormSubmit }) {
        super({ popupSelector });
        this._handleSubmit = handleFormSubmit;
        this._formElement = this._selector.querySelector('.popup__form');
        // достаём все элементы полей
        this._inputList = Array.from(this._selector.querySelectorAll('.popup__input'));
    }

    //Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
    //Обходит все поля и добавляет их значения в объект
    //ключи объекта - атрибуты name каждого поля
    _getInputValues() {
        // создаём пустой объект
        this._formValues = {};
        // добавляем в этот объект значения всех полей
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        console.log(this._formValues);
        // возвращаем объект значений
        return this._formValues;
        
        
    }

    //Перезаписывает родительский метод setEventListeners. 
    setEventListeners() {
        super.setEventListeners();

        // добавлять обработчик сабмита формы.
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            // добавим вызов функции _handleFormSubmit
            // передадим ей объект — результат работы _getInputValues
            this._handleSubmit(this._getInputValues());
        });
    }

    //Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
    close() {
        // очистим инпут после ввода
        this._formElement.reset();
        super.close();
    }
}
