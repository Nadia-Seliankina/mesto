// Импортируем из других файлов js
import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { Popup } from '../components/Popup.js'
import { PopupWithImage } from '../components/PicturePopup.js'
import { FormValidator, configFormSelector } from '../components/FormValidator.js'
import { initialCards, 
  popupEdit,
  popupEditForm,
  closeButtons,
  profileButtonEdit,
  profileName,
  profileActivity,
  inputName,
  inputActivity,
  popupAdd,
  profileAddButton,
  elementsContainer,
  formNewElement,
  inputPlace,
  inputLink,
  popupBigImage 
} from '../utils/constants.js'

const windowBigImage = new PopupWithImage('#popup-big-image', initialCards);

const windowEdit = new Popup('#popup-edit');

const windowPopupAdd = new Popup('#popup-add');

const openPopupBigImage = () => {
  windowBigImage.open();
}

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
cardList.renderItems();

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

  windowPopupAdd.close();
};

// Открытие формы редактирования профиля
const openPopupEdit = () => {
  windowEdit.open();
  //копирование текста в форму из профиля при открытии
  inputName.value = profileName.textContent;
  inputActivity.value = profileActivity.textContent;
}

// Открытие формы добавления новой карточки
const openPopupAdd = () => {
  windowPopupAdd.open();
}

// Обработчик «отправки» формы редактирования профиля
function handleProfileFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = inputName.value;
    profileActivity.textContent = inputActivity.value;
    windowEdit.close();
}

// Регистрируем обработчики событий редактирование профиля
profileButtonEdit.addEventListener('click', openPopupEdit);
popupEditForm.addEventListener('submit', handleProfileFormSubmit);

// Регистрируем обработчики событий добавление карточки
profileAddButton.addEventListener('click', openPopupAdd);
formNewElement.addEventListener('submit', handleCardFormSubmit);

//Для каждой проверяемой формы создаём экземпляр класса FormValidator
// Валидация
const validatorAddCard = new FormValidator(configFormSelector, formNewElement);
const validatorEditProfile = new FormValidator(configFormSelector, popupEditForm);
validatorAddCard.enableValidation();
validatorEditProfile.enableValidation();