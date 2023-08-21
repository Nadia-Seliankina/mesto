export class Card {
    // в конструкторе будут динамические данные, для каждого экземпляра свои
    constructor(dataCard, templateSelector, handleCardClick) { // Работа класса с разными шаблонами
        this._name = dataCard.name;
        this._link = dataCard.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        //handleCardClick - функция открывает попап с картинкой при клике на карточку
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

    // Удаление карточки
    _handleDeleteCard() {
        this._deleteBtn.closest('.element').remove(); // для ближайшего элемента по селектору
    }

    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => {
            this._handleLikeCard();
        });
        this._deleteBtn.addEventListener('click', () => {
            this._handleDeleteCard();
        });
        this._openBigImageBtn.addEventListener('click', () => {
            // добавим необходимые значения и откроем попап
            this._handleCardClick(this._name, this._link);
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
  
        //добавим обработчик лайка карточки
        this._likeBtn = this._view.querySelector('.element__button'); // Кнопка нравится
      
        //добавим открытие большой фотографии
        this._openBigImageBtn = this._view.querySelector('.element__image-button'); // Кнопка открытия попапа

        this._setEventListeners();

        // Вернём элемент наружу
        return this._view;
    };
}