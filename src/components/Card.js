import imageError from '../images/errorimage.png';
export class Card {
    // в конструкторе будут динамические данные, для каждого экземпляра свои
    constructor(dataCard, templateSelector, handleCardClick, handleClickDelete, handleLikeCard, userId) { // Работа класса с разными шаблонами
        this._dataCard = dataCard;
        this._name = dataCard.name;
        this._link = dataCard.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleClickDelete = handleClickDelete;
        this._handleLikeCard = handleLikeCard;
        this._userId = userId;
        this._ownerId = dataCard.owner._id;
    }

    // Получить шаблон
    _getTemplate() {
        // забираем разметку из HTML и клонируем элемент
        const elementTemplate = document.querySelector(this._templateSelector).content.children[0].cloneNode(true);
        // вернём клонированный DOM-элемент карточки
        return elementTemplate;
    }

    isLiked() {
        return this._dataCard.likes.some((item) => {
            return item._id === this._userId;
        })
    }

    _updateLike() {
        this._likeCounter.textContent = this._dataCard.likes.length;

        if (this.isLiked()) {
            this._likeBtn.classList.add('element__like_active');
        } else {
            this._likeBtn.classList.remove('element__like_active');
        }
    }

    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => {
            this._handleLikeCard(this);
        });

        this._deleteBtn.addEventListener('click', () => {
            this._handleClickDelete(this);
        });

        this._openBigImageBtn.addEventListener('click', () => {
            // добавим необходимые значения и откроем попап
            this._handleCardClick(this._name, this._link);
        });

        this._element__image.addEventListener('error', () => {
            this._link = imageError;
            this._element__image.src = imageError;
        })
    }

    setLikesData(data) {
        this._dataCard.likes = data.likes;
        this._updateLike();
    }

    remove() {
        this._view.remove();
        this._view = null;
    };

    getId() {
        return this._dataCard._id;
    }

    getData() {
        const { name, _id, link, likes } = this._dataCard;
        return { name, _id, link, likes };
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
        if (this._userId !== this._ownerId) {
            this._deleteBtn.remove();
        };

        //добавим обработчик лайка карточки
        this._likeBtn = this._view.querySelector('.element__button'); // Кнопка нравится
        this._likeCounter = this._view.querySelector('.element__counter');

        //добавим открытие большой фотографии
        this._openBigImageBtn = this._view.querySelector('.element__image-button'); // Кнопка открытия попапа

        this._setEventListeners();

        // Вернём элемент наружу
        return this._view;
    };
}