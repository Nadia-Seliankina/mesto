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
const popupElementAdd= document.querySelector('.form-add');
const popupCloseButtonElementAdd = popupElementAdd.querySelector('.form-edit__button-close');
const popupOpenButtonElementAdd = document.querySelector('.profile__add-button');

const addNewElement = document.querySelector('.elements__list');
const createElementTemplate = document.querySelector('#create-element-template').content.querySelector('.element');
const formNewElement = document.querySelector('#add-item');
const formNewElementInputName = document.querySelector('[name="input-place"]');
const formNewElementInputLink = formNewElement.querySelector('[name="input-link"]');

//карточки, которые добавит JavaScript
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
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];



// Динамическое создание элемента
function createElement(item) {
  // TEMPLATE
  const NewElement = createElementTemplate.cloneNode(true);
  const NewElementName = NewElement.querySelector('.element__title');
  NewElementName.textContent = item.name;
  const NewElementLink = NewElement.querySelector('.element__image');
  NewElementLink.src = item.link;
  NewElementLink.alt = item.name;

  return NewElement
}

const renderNewElement = (item, wrapElement) => {
  const element  = createElement(item);
  wrapElement.append(element);
  //addNewElement.append(element);
}

initialCards.forEach(function(item) {
  renderNewElement(item, addNewElement);
});

// Создание динамического объекта из формы - Обработчик отправки формы
const handleFormSubmit = (e) => {
  e.preventDefault();
  const NewElementSubmit = {
    name: formNewElementInputName.value,
    link: formNewElementInputLink.value
  }
  
  renderNewElement(NewElementSubmit, addNewElement);

  //NewElementName.textContent = formNewElementInputName.value;
  //NewElementLink.content = formNewElementInputLink.value;

};


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
  popupElementAdd.classList.add('form-add_opened');
  console.log('Open popup clicked');
}

const closePopupAdd = function closePopupAdd() { 
  popupElementAdd.classList.remove('form-add_opened');
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

formNewElement.addEventListener('submit', handleFormSubmit);
