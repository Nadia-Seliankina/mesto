// Проверяем, что подключили скрипт и он работает
console.log('Привет мир!');

// Делаем выборку DOM элементов
const popupElement = document.querySelector('.form-edit');
const popupCloseButtonElement = popupElement.querySelector('.form-edit__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');


const openPopup = function(event) { 
    popupElement.classList.add('form-edit_opened')
    console.log('Open popup clicked')
}

const closePopup = function() { 
    popupElement.classList.remove('form-edit_opened')
}

const closePopupByClickOnOverlay = function(event) {
    console.log(event.target, event.currentTarget);
    if (event.target !== event.currentTarget) {
        return;
    }
    
    closePopup();
}
// Ранний выход из функции

// Регистрируем обработчики событий по клику
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
