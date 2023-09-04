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
  popupEditAvatar,
  profileButtonEdit,
  profileAvatarEdit,
  profileAddButton,
  elementsContainer,
  formNewElement,
  battonSave,
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
    .then((formData) => {
      renderCard(formData);
      windowPopupAdd.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      battonSave.textContent = "Создать";
    })
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
          about: formUser.about,
          avatar: formUser.avatar
        })
        windowEdit.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        battonSave.textContent = "Сохранить";
      })
  }
});

const windowAvatar = new PopupWithForm({
  popupSelector: '#popup-avatar',
  // объект, который мы передадим при вызове handleFormSubmit
  // окажется на месте параметра fromUser
  handleFormSubmit: (formUser) => {
    api.editAvatar(formUser)
      .then((formUser) => {
        // Обработчик «отправки» формы редактирования профиля
        userInfo.getserverInfo({
          name: formUser.name,
          about: formUser.about,
          avatar: formUser.avatar
        })
        windowAvatar.close();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        battonSave.textContent = "Сохранить";
      })
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
  validatorAddCard.disabledButton(battonSave);
  console.log('ADD-OPEN');
}

// Инициализация класса с инфо о пользователе
const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userAboutSelector: '.profile__activity',
  userAvatarSelector: '.profile__avatar'
});

// Открытие формы редактирования профиля
const openPopupEdit = () => {
  windowEdit.open();
  validatorEditProfile.disabledButton(battonSave);
  validatorEditProfile.resetValidation();
  console.log('EDIT-OPEN');

  //копирование текста в форму из профиля при открытии
  windowEdit.setInputValues(userInfo.getUserInfo())
}

// Открытие формы редактирования аватара
const openPopupAvatar = () => {
  windowAvatar.open();
  validatorEditAvatar.disabledButton(battonSave);
  validatorEditAvatar.resetValidation();
  console.log('EDIT-аватар');
}

function handleLikePost(cardInstance) {
  api.changeLike(cardInstance.getId(), cardInstance.isLiked())
    .then((dataCardFromServer) => {
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
        cardInstance.remove();
        windowPopupConfirm.close();
      })
      .catch((err) => console.log(err))
  })
}

// Регистрируем обработчики событий большой картинки
windowBigImage.setEventListeners();

// Регистрируем обработчики событий редактирование профиля
profileButtonEdit.addEventListener('click', openPopupEdit);
windowEdit.setEventListeners();
profileAvatarEdit.addEventListener('click', openPopupAvatar);
windowAvatar.setEventListeners();


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
const validatorEditAvatar = new FormValidator(configFormSelector, popupEditAvatar);
validatorEditAvatar.enableValidation();
