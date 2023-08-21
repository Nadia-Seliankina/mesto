// Импортируем из других файлов js
import './index.css';

import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { PopupWithImage } from '../components/PicturePopup.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js'
import { FormValidator, configFormSelector } from '../components/FormValidator.js'
import { initialCards, 
  popupEditForm,
  profileButtonEdit,
  inputName,
  inputActivity,
  profileAddButton,
  elementsContainer,
  formNewElement,
  battonSave,
  battonCreate
} from '../utils/constants.js'

const windowBigImage = new PopupWithImage({ popupSelector: '#popup-big-image' });

const windowPopupAdd = new PopupWithForm({ 
  popupSelector: '#popup-add',
  // при отправке формы создать экземпляр Card и добавить его на страницу
  // объект, который мы передадим при вызове handleFormSubmit
  // окажется на месте параметра formData
  handleFormSubmit: (formData) => {
    renderCard(formData);
    windowPopupAdd.close();
  }
});

const openPopupBigImage = (name, link) => {
  windowBigImage.open(name, link);
}

const windowEdit = new PopupWithForm({ 
  popupSelector: '#popup-edit',
  // объект, который мы передадим при вызове handleFormSubmit
  // окажется на месте параметра fromUser
  handleFormSubmit: (formUser) => {
    // Обработчик «отправки» формы редактирования профиля
    userInfo.setUserInfo({
      inputName: formUser.inputName,
      inputActivity: formUser.inputActivity
    })

    windowEdit.close();
  }
});

// Добавление карточки
const renderCard = (dataCard) => {
  //создаст новый экземпляр класса. Инициализация класса.
  const card = new Card(dataCard, '#create-element-template', openPopupBigImage);
  // Создаём карточку и возвращаем наружу. Вызываем метод
  const cardElement = card.generateCard();
  // Добавляем новую карточку в DOM
  cardList.addItem(cardElement);
};

// Рендер всех карточек - создаём новый экземпляр класса Section
const cardList = new Section({ 
  items: initialCards,
  renderer: renderCard
}, elementsContainer);

// отрисовка карточек
cardList.renderItems();

// Открытие формы добавления новой карточки
const openPopupAdd = () => {
  windowPopupAdd.open();
  validatorAddCard.resetValidation();
  validatorAddCard.disabledButton(battonCreate);
  console.log('ADD-OPEN');
}

// Инициализация класса с инфо о пользователе
const userInfo = new UserInfo({ 
  userNameSelector: '.profile__name', 
  userAboutSelector: '.profile__activity'
});

// Открытие формы редактирования профиля
const openPopupEdit = () => {
  windowEdit.open();
  validatorEditProfile.disabledButton(battonSave);
  validatorEditProfile.resetValidation();
  console.log('EDIT-OPEN');
  //копирование текста в форму из профиля при открытии
  windowEdit.setInputValues(userInfo.getUserInfo());
}

// Регистрируем обработчики событий большой картинки
windowBigImage.setEventListeners();

// Регистрируем обработчики событий редактирование профиля
profileButtonEdit.addEventListener('click', openPopupEdit);
windowEdit.setEventListeners();

// Регистрируем обработчики событий добавление карточки
profileAddButton.addEventListener('click', openPopupAdd);
windowPopupAdd.setEventListeners();

//Для каждой проверяемой формы создаём экземпляр класса FormValidator
// Валидация
const validatorAddCard = new FormValidator(configFormSelector, formNewElement);
validatorAddCard.enableValidation();
const validatorEditProfile = new FormValidator(configFormSelector, popupEditForm);
validatorEditProfile.enableValidation();