// Проверяем, что подключили скрипт и он работает
console.log('Привет мир!');

// Делаем выборку DOM элементов
const popupElement = document.querySelector('.form-edit');
const popupCloseButtonElement = popupElement.querySelector('.form-edit__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

let nameProfile = document.querySelector('.profile__name');
let activityProfile = document.querySelector('.profile__activity');

let nameInput = document.querySelector('#item-name');
let activityInput = document.querySelector('#item-activity');

let saveElement = document.querySelector('.form-edit__button-save');



const openPopup = function openPopup() { 
    popupElement.classList.add('form-edit_opened');
    console.log('Open popup clicked');
    //копирование текста в форму из профиля при открытии
    nameInput.value = nameProfile.textContent;
    activityInput.value = activityProfile.textContent;
}

const closePopup = function closePopup() { 
    popupElement.classList.remove('form-edit_opened');
    console.log('Close popup clicked');
}


// Обработчик «отправки» формы
// Эта строчка отменяет стандартную отправку формы.
// Так мы можем определить свою логику отправки.
function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    activityProfile.textContent = activityInput.value;
    closePopup();
}

// Регистрируем обработчики событий по клику
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

popupElement.addEventListener('submit', formSubmitHandler);

