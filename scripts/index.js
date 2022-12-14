// Проверяем, что подключили скрипт и он работает
console.log('Привет мир!');

// Делаем выборку DOM элементов
const popupElement = document.querySelector('.form-edit');
const popupCloseButtonElement = popupElement.querySelector('.form-edit__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const nameProfile = document.querySelector('.profile__name');
const activityProfile = document.querySelector('.profile__activity');

const nameInput = document.querySelector('#item-name');
const activityInput = document.querySelector('#item-activity');



const openPopup = function() { 
    popupElement.classList.add('form-edit_opened');
    console.log('Open popup clicked');
    //копирование текста в форму из профиля при открытии
    nameInput.value = nameProfile.textContent;
    activityInput.value = activityProfile.textContent;
}

const closePopup = function() { 
    popupElement.classList.remove('form-edit_opened')
}

//const closePopupByClickOnOverlay = function(event) {
    //console.log(event.target, event.currentTarget);
    //if (event.target !== event.currentTarget) {
    //    return;
    //}
    
    //closePopup();
//}
// Ранний выход из функции

// Регистрируем обработчики событий по клику
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
//popupElement.addEventListener('click', closePopupByClickOnOverlay);
