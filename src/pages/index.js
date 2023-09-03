// Импортируем из других файлов js
import './index.css';

import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js'
import { FormValidator, configFormSelector } from '../components/FormValidator.js'
import {
  popupEditForm,
  profileButtonEdit,
  profileAddButton,
  elementsContainer,
  formNewElement,
  battonSave,
  battonCreate,
  configApi
} from '../utils/constants.js'
import { Api } from '../components/Api.js'
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js'

const api = new Api(configApi);

let userId = null;

api.getAllInfo()
  .then(([dataUser, dataCards]) => {
    userId = dataUser._id;
    cardList.renderItems(dataCards);
    userInfo.getserverInfo(dataUser);
  })
  .catch((err) => console.log(err))

const windowBigImage = new PopupWithImage({ popupSelector: '#popup-big-image' });

const windowPopupAdd = new PopupWithForm({
  popupSelector: '#popup-add',
  // при отправке формы создать экземпляр Card и добавить его на страницу
  // объект, который мы передадим при вызове handleFormSubmit
  // окажется на месте параметра formData
  handleFormSubmit: (formData) => {
    api.addCard(formData)
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
    api.editProfile(formUser)
      .then((formUser) => {
        // Обработчик «отправки» формы редактирования профиля
        userInfo.setUserInfo({
          name: formUser.name,
          about: formUser.about
        })
        windowEdit.close();
      })
      .catch((err) => console.log(err))
  }
});

// Добавление карточки
const renderCard = (dataCard) => {
  //создаст новый экземпляр класса. Инициализация класса.
  const card = new Card(dataCard, '#create-element-template', openPopupBigImage, handleFormDelete, handleLikePost, userId);
  // Создаём карточку и возвращаем наружу. Вызываем метод
  const cardElement = card.generateCard();
  // Добавляем новую карточку в DOM
  cardList.addItem(cardElement, 'append');
};

// Рендер всех карточек - создаём новый экземпляр класса Section
const cardList = new Section({
  renderer: renderCard
}, elementsContainer);

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
  windowEdit.setInputValues(userInfo.getUserInfo())

  //name.value = userInfo.getUserInfo().name; 
  //about.value = userInfo.getUserInfo().about;
}

function handleLikePost(cardInstance) {
  api.changeLike(cardInstance.getId(), cardInstance.isLiked())
    .then((dataCardFromServer) => {
      //console.log('старые лайки', cardInstance._dataCard);
      console.log('новые лайки', dataCardFromServer);
      cardInstance.setLikesData(dataCardFromServer);
    })
    .catch((err) => console.log(err))
}

const windowPopupConfirm = new PopupWithConfirmation({ popupSelector: '#popup-delete' }, null);

// Открытие формы удаления карточки
const openPopupConfirm = () => {
windowPopupConfirm.open();
console.log('delete?');
}

// Удаление карточки
function handleFormDelete(cardInstance) {
  openPopupConfirm();

  windowPopupConfirm.setHendleSubmit(() => {
    api.removeCard(cardInstance.getId())
      .then(() => {
        console.log('успешно удалена');
        //cardInstance.remove();
        //windowPopupConfirm.close();
      })
      .catch((err) => console.log(err))
  })
}

//handleFormSubmit: () => {
//
//buttonDelete.closest('.element').remove(); // для ближайшего элемента по селектору
//}

// Регистрируем обработчики событий большой картинки
windowBigImage.setEventListeners();

// Регистрируем обработчики событий редактирование профиля
profileButtonEdit.addEventListener('click', openPopupEdit);
windowEdit.setEventListeners();

// Регистрируем обработчики событий добавление карточки
profileAddButton.addEventListener('click', openPopupAdd);
windowPopupAdd.setEventListeners();

// Регистрируем обработчики событий удаление карточки
windowPopupConfirm.setEventListeners();

//Для каждой проверяемой формы создаём экземпляр класса FormValidator
// Валидация
const validatorAddCard = new FormValidator(configFormSelector, formNewElement);
validatorAddCard.enableValidation();
const validatorEditProfile = new FormValidator(configFormSelector, popupEditForm);
validatorEditProfile.enableValidation();
