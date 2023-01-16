// Делаем выборку DOM элементов для редактирования профиля / Найдём селектор на странице
const popupElement = document.querySelector('.form-edit');
const popupCloseButtonElement = popupElement.querySelector('.form-edit__button-close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

let nameProfile = document.querySelector('.profile__name');
let activityProfile = document.querySelector('.profile__activity');

let nameInput = document.querySelector('#item-name');
let activityInput = document.querySelector('#item-activity');

let saveElement = document.querySelector('.form-edit__button-save');

// Делаем выборку DOM элементов для формы добавления новой карточки
const popupElementAdd= document.querySelector('#form-add');
const popupCloseButtonElementAdd = popupElementAdd.querySelector('.form-edit__button-close');
const popupOpenButtonElementAdd = document.querySelector('.profile__add-button');

const elementsContainer = document.querySelector('.elements__list'); // Ul куда вставляем элементы
const formNewElement = document.querySelector('#add-item'); // form внутри popup
const InputPlace = document.querySelector('[name="input-place"]'); // inpit внутри popup
const InputLink = formNewElement.querySelector('[name="input-link"]'); // inpit внутри popup

// Делаем выборку DOM элементов для открытия и закрытия большой картинки
const popupBigImage = document.querySelector('.big-image'); // Весь попап
const popupBigImageClose = popupBigImage.querySelector('.big-image__button-close'); // Кнопка закрытия

//карточки, которые добавит JavaScript - приходят с бэкенда
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
const ElementTemplate = document.querySelector('#create-element-template').content.querySelector('.element'); 


const handleDeleteCard = (event) => {
  event.target.closest('.element').remove(); // для ближайшего элемента по селектору
}


const handleLikeCard = (event) => {
  event.target.closest('.element__like').classList.toggle('element__like_active'); // для ближайшего элемента по селектору
}

const openPopupBigImage = function openPopupBigImage() {
  popupBigImage.classList.add('big-image_opened');
  console.log('Open big image');
}

// Генерация карточки
const generateCard = (dataCard) => {
  const newCard = ElementTemplate.cloneNode(true);
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
  const openBigImage = newCard.querySelector('.element__image-button'); // Кнопка открытия попапа
  const bigImage = document.querySelector('.big-image__photo'); // Большое фото
  const titleImage = document.querySelector('.big-image__title'); // Подпись к фото

  openBigImage.addEventListener('click', function(event) {
    openPopupBigImage();
    // добавим необходимые значения
    bigImage.src = dataCard.link;
    titleImage.textContent = dataCard.name;
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
  console.log('Submit Add Element');
  const placeOfUser = InputPlace.value;
  const linkOfUser = InputLink.value;
  renderCard({
    name: placeOfUser, 
    link: linkOfUser
  });
  // очистим инпут после ввода
  InputPlace.value = '';
  InputLink.value = '';

  closePopupAdd();
};

// Закрытие большой фотографии
const closeBigImage = function closeBigImage() {
  popupBigImage.classList.remove('big-image_opened');
  console.log('Close big image');
}


// Открытие и закрытие формы редактирования профиля
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

// Открытие и закрытие формы добавления новой карточки
const openPopupAdd = function openPopupAdd() { 
  popupElementAdd.classList.add('form-edit_opened');
  console.log('Open popup clicked');
}

const closePopupAdd = function closePopupAdd() { 
  popupElementAdd.classList.remove('form-edit_opened');
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

popupOpenButtonElementAdd.addEventListener('click', openPopupAdd);
popupCloseButtonElementAdd.addEventListener('click', closePopupAdd);

formNewElement.addEventListener('submit', formSubmitHandlerAddElement);

popupBigImageClose.addEventListener('click', closeBigImage);
