// Универсальная валидация для всех форм на странице




function showError (inputElement, errorElement, config) {
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}

function hideError (inputElement, errorElement, config) {
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}

function disabledButton (buttonElement, config) {
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);
}

function enabledButton (buttonElement, config) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
}

function toggleButtonState (buttonElement, isActive, config) {
    if (!isActive) {
        disabledButton(buttonElement, config);
    } else {
        enabledButton(buttonElement, config);
    }
}

// При наступлении события ввода в инпут проверяем его валидность
function checkInputValidity(inputElement, formElement, config) {
    console.log(inputElement.validitionMessege);
    const isInputValid = inputElement.validity.valid;

    // Получаем элемент ошибки
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    //if (!errorElement) return;

    // Усли инпут не валиден выводи сообщение об ошибке в элемент ошибки и добавляем класс невалидности
    if (!isInputValid){
        showError (inputElement, errorElement, config);
    } else {
        hideError (inputElement, errorElement, config);
    }
    //В противнм случае удаляем класс и очищаем сообщение
}

// Вешаем обработчик события submit на каждую форму в переборе
function setEventListener(formElement, config) {
    // Внутри каждой формы ищем инпуты
    const inputsList = Array.from(formElement.querySelectorAll(config.inputSelector));
    // Найдём кнопки
    const submitButtonElement = formElement.querySelector(config.buttonSelector);

    toggleButtonState(submitButtonElement, formElement.checkValidity(), config);
    
    formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('Форма отправлена');
    })

    // Перебираем список инпутов конкретной формы и вешаем на каждый инпут обработчик события input
    inputsList.forEach((inputItem) => {
      inputItem.addEventListener('input', () => {
        toggleButtonState(submitButtonElement, formElement.checkValidity(), config);
        checkInputValidity(inputItem, formElement, config);
      })
    })
}

function enableValidation (config) {
    // Находим все формы и перебирраем их
    const forms = document.querySelectorAll(config.formSelector);
    [...forms].forEach((formItem) => {
      setEventListener(formItem, config);
    })
}

// Параметризируем функцию enableValidation
// Создадим объект с настройками формы
const configFormSelector = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_invalid',
    inputErrorClass: 'popup__input_state_invalid'
}

enableValidation(configFormSelector);
