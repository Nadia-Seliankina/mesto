// Универсальная валидация для всех форм на странице

// Параметризируем функцию enableValidation
// Создадим объект с настройками формы
export const configFormSelector = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_invalid',
    inputErrorClass: 'popup__input_state_invalid'
}

export class FormValidator {
    constructor(configFormSelector, formElement) { 
        // принимает в конструктор объект настроек с селекторами и классами формы
        // принимает вторым параметром элемент той формы, которая валидируется
        this._formElement = formElement;
        this._formSelector = configFormSelector.formSelector;
        this._inputSelector = configFormSelector.inputSelector;
        this._buttonSelector = configFormSelector.buttonSelector;
        this._inactiveButtonClass = configFormSelector.inactiveButtonClass;
        this._inputErrorClass = configFormSelector.inputErrorClass;
    }

    _showError (inputElement, errorElement) {
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    }
    
    _hideError (inputElement, errorElement) {
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
        //errorElement.textContent = inputElement.validationMessage;
    }

    disabledButton (buttonElement) {
        buttonElement.disabled = true;
        buttonElement.classList.add(this._inactiveButtonClass);
        console.log('disabledButton');
    }
    
    _enabledButton (buttonElement) {
        buttonElement.disabled = false;
        buttonElement.classList.remove(this._inactiveButtonClass);
    }

    //приватные методы изменяют состояние кнопки сабмита
    _toggleButtonState (buttonElement, isActive) {
        if (!isActive) {
            this.disabledButton(buttonElement);
        } else {
            this._enabledButton(buttonElement);
        }
    }

    // приватные методы, которые проверяют валидность поля
    // При наступлении события ввода в инпут проверяем его валидность
    _checkInputValidity(inputElement) {
        //console.log(inputElement.validitionMessege);
        this._isInputValid = inputElement.validity.valid;

        // Получаем элемент ошибки
        //this._errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        this._errorElement = this._formElement.querySelector(`[name=${inputElement.name}-error]`);
        //if (!this._errorElement) return;

        // Если инпут не валиден выводи сообщение об ошибке в элемент ошибки и добавляем класс невалидности
        if (!this._isInputValid){
            this._showError (inputElement, this._errorElement);
            } else {
            this._hideError (inputElement, this._errorElement);
            }
        //В противнм случае удаляем класс и очищаем сообщение
    }
    
    // Вешаем обработчик события submit на форму
    _setEventListener() {
    // Внутри формы ищем инпуты
    this._inputsList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    // Найдём кнопки
    this._submitButtonElement = this._formElement.querySelector(this._buttonSelector); 

    this._toggleButtonState(this._submitButtonElement, this._formElement.checkValidity());

    this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        console.log('Форма отправлена');
        this._toggleButtonState(this._submitButtonElement, this._formElement.checkValidity());
    })

    // Перебираем список инпутов конкретной формы и вешаем на каждый инпут обработчик события input
    this._inputsList.forEach((inputItem) => {
            inputItem.addEventListener('input', () => {
                this._toggleButtonState(this._submitButtonElement, this._formElement.checkValidity());
                this._checkInputValidity(inputItem);
            })
        })
    }

    //публичный метод, который включает валидацию
    enableValidation () {
        this._setEventListener();
        console.log('setVALIDATION');
    }

    resetValidation() {
        //управляем кнопкой
        this._toggleButtonState(this._submitButtonElement, this._formElement.checkValidity());
  
        this._inputsList.forEach((inputElement) => {
            //Так как errorElement ещё не определён внутри этой функции, ещё не доступен так как на каждый ввод определяется
            //const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
            const errorElement = this._formElement.querySelector(`[name=${inputElement.name}-error]`);
            this._hideError(inputElement, errorElement); //очищаем ошибки
        });
        console.log('resetVALIDATION');
    }
}
