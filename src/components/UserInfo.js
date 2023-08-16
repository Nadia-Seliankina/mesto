//управление отображением информации о пользователе на странице
export class UserInfo {
    //Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе
    constructor({ userNameSelector, userAboutSelector }) {
        this._profileName = document.querySelector(userNameSelector);
        this._profileActivity = document.querySelector(userAboutSelector);
    }

    //возвращает объект с данными пользователя. 
    //данные пользователя нужно подставить в форму при открытии.
    getUserInfo() {
        //ключи объекта - атрибуты name каждого поля
        const userData = {
            inputName: this._profileName.textContent,
            inputActivity: this._profileActivity.textContent
        }

        return userData;
    }

    //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(userData) {
        this._profileName.textContent = userData.inputName;
        this._profileActivity.textContent = userData.inputActivity;
    }
}
