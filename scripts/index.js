// Делаем выборку DOM элементов для редактирования профиля / Найдём селектор на странице
const popupEdit = document.querySelector('#popup-edit'); // попап редактирования профиля
const popupEditForm = popupEdit.querySelector('[name="form-edit-profile"]');
const popupEditButtonClose = popupEdit.querySelector('#popup-edit-button-close');
const profileButtonEdit = document.querySelector('.profile__edit-button');

const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');

const inputName = document.querySelector('#input-name');
const inputActivity = document.querySelector('#input-activity');

// Делаем выборку DOM элементов для формы добавления новой карточки
const popupAdd= document.querySelector('#popup-add'); //попап добавления карточки
const popupAddButtonClose = popupAdd.querySelector('#popup-add-button-close');
const profileAddButton = document.querySelector('.profile__add-button');

const elementsContainer = document.querySelector('.elements__list'); // Ul куда вставляем элементы
const formNewElement = document.querySelector('#form-add-item'); // form внутри popup
const inputPlace = document.querySelector('[name="input-place"]'); // inpit внутри popup
const inputLink = formNewElement.querySelector('[name="input-link"]'); // inpit внутри popup

// Делаем выборку DOM элементов для открытия и закрытия большой картинки
const popupBigImage = document.querySelector('#popup-big-image'); // Весь попап
const popupBigImageButtonClose = popupBigImage.querySelector('#popup-image-button-close'); // Кнопка закрытия
const bigImage = document.querySelector('.popup__big-photo'); // Большое фото
const titleImage = document.querySelector('.popup__title-big-image'); // Подпись к фото

//карточки, которые добавит JavaScript. В будущем будем получать карточки с бэкэнда.
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Зеленоград',
      link: 'https://images.unsplash.com/photo-1536577722576-fcfdbcad17e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Рускеала',
      link: 'https://images.unsplash.com/photo-1573156667495-f14c98bc2ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// Получить шаблон
const elementTemplate = document.querySelector('#create-element-template').content.querySelector('.element'); 

const handleDeleteCard = (event) => {
  event.target.closest('.element').remove(); // для ближайшего элемента по селектору
}

const handleLikeCard = (event) => {
  event.target.closest('.element__like').classList.toggle('element__like_active'); // для ближайшего элемента по селектору
}

const openPopupBigImage = () => {
  openPopup(popupBigImage);
}

// Генерация карточки
const generateCard = (dataCard) => {
  const newCard = elementTemplate.cloneNode(true);
  // добавим необходимые значения
  const nameInCard = newCard.querySelector('.element__title');
  nameInCard.textContent = dataCard.name;
  const linkInCard = newCard.querySelector('.element__image');
  linkInCard.src = dataCard.link;
  linkInCard.alt = dataCard.name;

  //добавим удаление карточки
  const deleteBtn = newCard.querySelector('.element__delete'); // Кнопка удаления
  deleteBtn.addEventListener('click', handleDeleteCard);

  //добавим лайк карточки
  const likeBtn = newCard.querySelector('.element__button'); // Кнопка нравится
  likeBtn.addEventListener('click', handleLikeCard);

  //добавим открытие большой фотографии
  const openBigImageBtn = newCard.querySelector('.element__image-button'); // Кнопка открытия попапа
  
  openBigImageBtn.addEventListener('click', function(event) {
    openPopupBigImage();
    // добавим необходимые значения
    bigImage.src = dataCard.link;
    titleImage.textContent = dataCard.name;
    bigImage.alt = dataCard.name;
  });

  return newCard;
};

// Добавление карточки
const renderCard = (dataCard) => {
  elementsContainer.prepend(generateCard(dataCard));
};

// Рендер всех карточек
initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});

// Создание динамического объекта из формы - Обработчик отправки формы
const formSubmitHandlerAddElement = (event) => {
  event.preventDefault();
  
  const placeOfUser = inputPlace.value;
  const linkOfUser = inputLink.value;
  renderCard({
    name: placeOfUser, 
    link: linkOfUser
  });
  // очистим инпут после ввода
  formNewElement.reset()

  closePopupAdd();
};

//Универсальная функция открытия попапов
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
};

//Универсальная функция закрытия попапов
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
};

// Закрытие большой фотографии
const closeBigImage = () => {
  closePopup(popupBigImage);
}

// Открытие формы редактирования профиля
const openPopupEdit = () => {
  openPopup(popupEdit);
  //копирование текста в форму из профиля при открытии
  inputName.value = profileName.textContent;
  inputActivity.value = profileActivity.textContent;
}

// Закрытие формы редактирования профиля
const closePopupEdit = () => {
  closePopup(popupEdit);
}

// Открытие формы добавления новой карточки
const openPopupAdd = () => {
  openPopup(popupAdd);
}

const closePopupAdd = () => {
  closePopup(popupAdd);
}

// Обработчик «отправки» формы редактирования профиля
function formEditSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = inputName.value;
    profileActivity.textContent = inputActivity.value;
    closePopupEdit();
}

// Регистрируем обработчики событий по клику
profileButtonEdit.addEventListener('click', openPopupEdit);
popupEditButtonClose.addEventListener('click', closePopupEdit);

popupEditForm.addEventListener('submit', formEditSubmitHandler);

profileAddButton.addEventListener('click', openPopupAdd);
popupAddButtonClose.addEventListener('click', closePopupAdd);

formNewElement.addEventListener('submit', formSubmitHandlerAddElement);

popupBigImageButtonClose.addEventListener('click', closeBigImage);
