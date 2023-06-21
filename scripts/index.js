// Импортируем из других файлов js
import { Card } from './Card.js'
import { FormValidator, configFormSelector } from './FormValidator.js'
import { initialCards } from './constants.js'

const modal = document.querySelector('.popup');
// Делаем выборку DOM элементов для редактирования профиля / Найдём селектор на странице
const popupEdit = document.querySelector('#popup-edit'); // попап редактирования профиля
const popupEditForm = document.forms['form-edit-profile'];
const closeButtons = document.querySelectorAll('.popup__button-close'); // все крестики - закрывает все попапы
const profileButtonEdit = document.querySelector('.profile__edit-button');

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');

const inputName = document.querySelector('#input-name');
const inputActivity = document.querySelector('#input-activity');

// Делаем выборку DOM элементов для формы добавления новой карточки
const popupAdd= document.querySelector('#popup-add'); //попап добавления карточки
const profileAddButton = document.querySelector('.profile__add-button');

const elementsContainer = document.querySelector('.elements__list'); // Ul куда вставляем элементы
const formNewElement = document.forms['form-add-item']; // form внутри popup
const inputPlace = document.querySelector('[name="input-place"]'); // inpit внутри popup
const inputLink = formNewElement.querySelector('[name="input-link"]'); // inpit внутри popup

// Делаем выборку DOM элементов для открытия и закрытия большой картинки
const popupBigImage = document.querySelector('#popup-big-image'); // Весь попап

const openPopupBigImage = () => {
  openPopup(popupBigImage);
}

// Добавление карточки
const renderCard = (dataCard) => {
  //создаст новый экземпляр класса. Инициализация класса.
  const card = new Card(dataCard, '#create-element-template', openPopupBigImage);
  // Создаём карточку и возвращаем наружу. Вызываем метод
  const cardElement = card.generateCard();
  // Добавляем новую карточку в DOM
  elementsContainer.prepend(cardElement);
};

// Рендер всех карточек
initialCards.forEach(renderCard);

// Создание динамического объекта из формы - Обработчик отправки формы
const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  
  const placeOfUser = inputPlace.value;
  const linkOfUser = inputLink.value;
  renderCard({
    name: placeOfUser, 
    link: linkOfUser
  });
  // очистим инпут после ввода
  formNewElement.reset()

  closePopup(popupAdd);
};

//закрытие попапов при клике на фон
const closePopupByOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
    console.log('click');
  }
}

// закрытие попапов при нажатии ESC
const closePopupByEsc = (evt) => {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
    console.log('esc');
  }
}

//Универсальная функция открытия попапов
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  popupElement.addEventListener('click', closePopupByOverlay);
  document.addEventListener('keydown', closePopupByEsc);
};

//Универсальная функция закрытия попапов
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  popupElement.removeEventListener('click', closePopupByOverlay);
  document.removeEventListener('keydown', closePopupByEsc);
};

// Открытие формы редактирования профиля
const openPopupEdit = () => {
  openPopup(popupEdit);
  //копирование текста в форму из профиля при открытии
  inputName.value = profileName.textContent;
  inputActivity.value = profileActivity.textContent;
}

// Открытие формы добавления новой карточки
const openPopupAdd = () => {
  openPopup(popupAdd);
}

// Обработчик «отправки» формы редактирования профиля
function handleProfileFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = inputName.value;
    profileActivity.textContent = inputActivity.value;
    closePopup(popupEdit);
}

// Регистрируем обработчики событий редактирование профиля
profileButtonEdit.addEventListener('click', openPopupEdit);
popupEditForm.addEventListener('submit', handleProfileFormSubmit);

// Регистрируем обработчики событий добавление карточки
profileAddButton.addEventListener('click', openPopupAdd);
formNewElement.addEventListener('submit', handleCardFormSubmit);

//Универсальный обработчик крестиков закрытия попапов
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

//Для каждой проверяемой формы создаём экземпляр класса FormValidator
// Валидация
const validatorAddCard = new FormValidator(configFormSelector, formNewElement);
const validatorEditProfile = new FormValidator(configFormSelector, popupEditForm);
validatorAddCard.enableValidation();
validatorEditProfile.enableValidation();