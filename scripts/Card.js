//import { openPopup } from './index.js' // Доступ к универсальной функции из основного файла js

export class Card {
    // в конструкторе будут динамические данные,
    // для каждого экземпляра свои
    constructor(dataCard, templateSelector, openPopup) { // Работа класса с разными шаблонами
        this._name = dataCard.name;
        this._link = dataCard.link;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
    }

    // Получить шаблон
    _getTemplate() {
        // забираем разметку из HTML и клонируем элемент
        const elementTemplate = document.querySelector(this._templateSelector).content.children[0].cloneNode(true);
        // вернём клонированный DOM-элемент карточки
        return elementTemplate;
    }

    // Лайк
    _handleLikeCard() {
        this._likeBtn.classList.toggle('element__like_active');
    }

    _setEventListenersLike() {
        this._likeBtn.addEventListener('click', () => {
            this._handleLikeCard();
        });
    }

    // Удаление карточки
    _handleDeleteCard() {
        this._deleteBtn.closest('.element').remove(); // для ближайшего элемента по селектору
    }

    _setEventListenersDeleteCard() {
        this._deleteBtn.addEventListener('click', () => {
        this._handleDeleteCard();
        });
    }

    // Попап
    _setEventListenersPopup() {
        this._openBigImageBtn.addEventListener('click', () => {
            // добавим необходимые значения
            this._bigImage.src = this._link;
            this._titleImage.textContent = this._name;
            this._bigImage.alt = this._name;
            
            this._openPopup();
        });
    }

    // Генерация карточки
    generateCard() {
        // Запишем разметку в приватное поле _element. Так у других элементов появится доступ к ней.
        this._view = this._getTemplate();

        this._element__image = this._view.querySelector('.element__image');
        // добавим необходимые значения
        this._view.querySelector('.element__title').textContent = this._name;
        this._element__image.src = this._link;
        this._element__image.alt = this._name;
  
        //добавим удаление карточки
        this._deleteBtn = this._view.querySelector('.element__delete'); // Кнопка удаления
        this._setEventListenersDeleteCard();
  
        //добавим обработчик лайка карточки
        this._likeBtn = this._view.querySelector('.element__button'); // Кнопка нравится
        this._setEventListenersLike();
      
        //добавим открытие большой фотографии
        this._openBigImageBtn = this._view.querySelector('.element__image-button'); // Кнопка открытия попапа
        // Делаем выборку DOM элементов для открытия и закрытия большой картинки
        this._bigImage = document.querySelector('.popup__big-photo'); // Большое фото
        this._titleImage = document.querySelector('.popup__title-big-image'); // Подпись к фото

        this._setEventListenersPopup();

        // Вернём элемент наружу
        return this._view;
    };

}