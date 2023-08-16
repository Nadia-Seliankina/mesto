//карточки, которые добавит JavaScript. В будущем будем получать карточки с бэкэнда.
export const initialCards = [
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

//const modal = document.querySelector('.popup');
// Делаем выборку DOM элементов для редактирования профиля / Найдём селектор на странице
export const popupEdit = document.querySelector('#popup-edit'); // попап редактирования профиля
export const popupEditForm = document.forms['form-edit-profile'];
export const closeButtons = document.querySelectorAll('.popup__button-close'); // все крестики - закрывает все попапы
export const profileButtonEdit = document.querySelector('.profile__edit-button');

export const profileName = document.querySelector('.profile__name');
export const profileActivity = document.querySelector('.profile__activity');

export const inputName = document.querySelector('#inputName');
export const inputActivity = document.querySelector('#inputActivity');

// Делаем выборку DOM элементов для формы добавления новой карточки
export const popupAdd= document.querySelector('#popup-add'); //попап добавления карточки
export const profileAddButton = document.querySelector('.profile__add-button');

//export const elementsContainer = document.querySelector('.elements__list'); // Ul куда вставляем элементы
export const elementsContainer = '.elements__list'; // Ul куда вставляем элементы
export const formNewElement = document.forms['form-add-item']; // form внутри popup
export const inputPlace = document.querySelector('[name="input-place"]'); // inpit внутри popup
export const inputLink = formNewElement.querySelector('[name="input-link"]'); // inpit внутри popup

// Делаем выборку DOM элементов для открытия и закрытия большой картинки
export const popupBigImage = document.querySelector('#popup-big-image'); // Весь попап