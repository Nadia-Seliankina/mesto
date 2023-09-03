// Перебор массива и отрисовка элементов на странице / Вставка элементов в разметку
export class Section {
    constructor({ renderer }, selector) {
        //Свойство items — это массив данных, которые нужно добавить на страницу при инициализации класса.
        //this._items = items;
        //Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
        this._renderer = renderer;
        // Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.
        this._container = document.querySelector(selector);
    }

    //Рендер всех карточек. Перебор массива. Отрисовка каждого отдельного элемента  должна осуществляться функцией renderer.
    // У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер
    renderItems (cardsArray) {
        cardsArray.forEach((dataCard) => {
            this._renderer(dataCard);
        });
    }

    // принимает DOM-элемент и добавляет его в контейнер. Вся логика отрисовки элемента
    addItem (element, position = 'append') {
        switch (position) {
            case 'append':
                this._container.append(element);
                break;
            case 'prepend':
                this._container.prepend(element);
                break;
            default:
                console.log('Передана неверная позиция');
                break;
        }
    }
}
