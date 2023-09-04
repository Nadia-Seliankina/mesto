(()=>{"use strict";const e="images/5ef61e057a35e0ab2fb1.png";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._dataCard=e,this._name=e.name,this._link=e.link,this._templateSelector=n,this._handleCardClick=r,this._handleClickDelete=o,this._handleLikeCard=i,this._userId=u,this._ownerId=e.owner._id}var r,o;return r=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.children[0].cloneNode(!0)}},{key:"isLiked",value:function(){var e=this;return this._dataCard.likes.some((function(t){return t._id===e._userId}))}},{key:"_updateLike",value:function(){this._likeCounter.textContent=this._dataCard.likes.length,this.isLiked()?this._likeBtn.classList.add("element__like_active"):this._likeBtn.classList.remove("element__like_active")}},{key:"_setEventListeners",value:function(){var t=this;this._likeBtn.addEventListener("click",(function(){t._handleLikeCard(t)})),this._deleteBtn.addEventListener("click",(function(){t._handleClickDelete(t)})),this._openBigImageBtn.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)})),this._element__image.addEventListener("error",(function(){t._link=e,t._element__image.src=e}))}},{key:"setLikesData",value:function(e){this._dataCard.likes=e.likes,this._updateLike()}},{key:"remove",value:function(){this._view.remove(),this._view=null}},{key:"getId",value:function(){return this._dataCard._id}},{key:"getData",value:function(){var e=this._dataCard;return{name:e.name,_id:e._id,link:e.link,likes:e.likes}}},{key:"generateCard",value:function(){return this._view=this._getTemplate(),this._element__image=this._view.querySelector(".element__image"),this._view.querySelector(".element__title").textContent=this._name,this._element__image.src=this._link,this._element__image.alt=this._name,this._deleteBtn=this._view.querySelector(".element__delete"),this._userId!==this._ownerId&&this._deleteBtn.remove(),this._likeBtn=this._view.querySelector(".element__button"),this._likeCounter=this._view.querySelector(".element__counter"),this._openBigImageBtn=this._view.querySelector(".element__image-button"),this._setEventListeners(),this._view}}])&&n(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){switch(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"append"){case"append":this._container.append(e);break;case"prepend":this._container.prepend(e);break;default:console.log("Передана неверная позиция")}}}],n&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function c(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}var s=function(){function e(t){var n,r,o,i=this,u=t.popupSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&(i.close(),console.log("esc"))},(r=c(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._selector=document.querySelector(u),this._handleOverlayCloseBound=this._handleOverlayClose.bind(this),this.closeBound=this.close.bind(this),this._handleEscCloseBound=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleOverlayClose",value:function(e){e.target===e.currentTarget&&(this.close(),console.log("click"))}},{key:"setEventListeners",value:function(){this._closeButton=this._selector.querySelector(".popup__button-close"),this._closeButton.addEventListener("click",this.closeBound),this._selector.addEventListener("click",this._handleOverlayCloseBound),console.log("SETlistenerCLICK")}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscCloseBound),console.log("REMOVElistener")}},{key:"open",value:function(){this._selector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscCloseBound)}},{key:"close",value:function(){this._selector.classList.remove("popup_opened"),this._removeEventListeners()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._bigPhoto=t._selector.querySelector(".popup__big-photo"),t._titlePhoto=t._selector.querySelector(".popup__title-big-image"),t}return t=u,(n=[{key:"open",value:function(e,t){y(m(u.prototype),"open",this).call(this),this._bigPhoto.src=t,this._titlePhoto.textContent=e,this._bigPhoto.alt=e}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._handleSubmit=r,t._formElement=t._selector.querySelector(".popup__form"),t._inputList=Array.from(t._selector.querySelectorAll(".popup__input")),t._battonSave=t._selector.querySelector('[name="button-save"]'),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),console.log(this._formValues),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;_(g(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues()),e._battonSave.textContent="Сохранение..."}))}},{key:"close",value:function(){this._formElement.reset(),_(g(u.prototype),"close",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var O=function(){function e(t){var n=t.userNameSelector,r=t.userAboutSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileActivity=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileActivity.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileActivity.textContent=e.about,this._profileAvatar.src=e.avatar}},{key:"getserverInfo",value:function(e){this._profileName.textContent=e.name,this._profileActivity.textContent=e.about,this._profileAvatar.src=e.avatar}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var C={formSelector:".popup__form",inputSelector:".popup__input",buttonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_invalid",inputErrorClass:"popup__input_state_invalid"},L=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._buttonSelector=t.buttonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass}var t,n;return t=e,(n=[{key:"_showError",value:function(e,t){e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}},{key:"_hideError",value:function(e,t){e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"disabledButton",value:function(e){e.disabled=!0,e.classList.add(this._inactiveButtonClass),console.log("disabledButton")}},{key:"_enabledButton",value:function(e){e.disabled=!1,e.classList.remove(this._inactiveButtonClass)}},{key:"_toggleButtonState",value:function(e,t){t?this._enabledButton(e):this.disabledButton(e)}},{key:"_checkInputValidity",value:function(e){this._isInputValid=e.validity.valid,this._errorElement=this._formElement.querySelector("#".concat(e.name,"-error")),this._isInputValid?this._hideError(e,this._errorElement):this._showError(e,this._errorElement)}},{key:"_setEventListener",value:function(){var e=this;this._inputsList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButtonElement=this._formElement.querySelector(this._buttonSelector),this._toggleButtonState(this._submitButtonElement,this._formElement.checkValidity()),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),console.log("Форма отправлена"),e._toggleButtonState(e._submitButtonElement,e._formElement.checkValidity())})),this._inputsList.forEach((function(t){t.addEventListener("input",(function(){e._toggleButtonState(e._submitButtonElement,e._formElement.checkValidity()),e._checkInputValidity(t)}))}))}},{key:"enableValidation",value:function(){this._setEventListener(),console.log("setVALIDATION")}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(this._submitButtonElement,this._formElement.checkValidity()),this._inputsList.forEach((function(t){var n=e._formElement.querySelector("#".concat(t.name,"-error"));e._hideError(t,n)})),console.log("resetVALIDATION")}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),B=(document.querySelector("#popup-edit"),document.forms["form-edit-profile"]),I=document.forms["form-edit-avatar"],T=document.querySelector(".profile__avatar-button"),q=(document.querySelectorAll(".popup__button-close"),document.querySelector(".profile__edit-button")),A=document.querySelector('[name="button-save"]'),R=(document.querySelector(".profile__name"),document.querySelector(".profile__activity"),document.querySelector("#popup-add"),document.querySelector(".profile__add-button")),V=document.forms["form-add-item"];function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function N(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}document.querySelector('[name="input-place"]'),V.querySelector('[name="input-link"]'),document.querySelector("#popup-big-image");var U=new WeakSet,F=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,r=U),r.add(n),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInfoUser",value:function(){return fetch("".concat(this._url,"/v1/cohort-73/users/me"),{headers:this._headers}).then(N(this,U,H))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/v1/cohort-73/cards"),{headers:this._headers}).then(N(this,U,H))}},{key:"getAllInfo",value:function(){return Promise.all([this.getInfoUser(),this.getInitialCards()])}},{key:"editProfile",value:function(e){return fetch("".concat(this._url,"/v1/cohort-73/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(N(this,U,H))}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"/v1/cohort-73/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then(N(this,U,H))}},{key:"removeCard",value:function(e){return fetch("".concat(this._url,"/v1/cohort-73/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(N(this,U,H))}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/v1/cohort-73/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(N(this,U,H))}},{key:"changeLike",value:function(e,t){return fetch("".concat(this._url,"/v1/cohort-73/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:this._headers}).then(N(this,U,H))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==J(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=W(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},z.apply(this,arguments)}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(r);if(o){var n=W(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===J(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._formElement=t._selector.querySelector(".popup__form"),t._handleFormSubmit=r,t}return t=u,(n=[{key:"setHendleSubmit",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;z(W(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(),console.log("сабмит удаления карточки")}))}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(s);function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q=new F({url:"https://mesto.nomoreparties.co",headers:{"content-type":"application/json",authorization:"0523e71c-6164-4ff4-82c6-ca81e8bb5b70"}}),X=null;Q.getAllInfo().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,l=[],a=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X=o._id,oe.renderItems(i),ie.getserverInfo(o)})).catch((function(e){return console.log(e)}));var Y=new d({popupSelector:"#popup-big-image"}),Z=new w({popupSelector:"#popup-add",handleFormSubmit:function(e){Q.addCard(e).then((function(e){re(e),Z.close()})).catch((function(e){return console.log(e)})).finally((function(){A.textContent="Создать"}))}}),ee=function(e,t){Y.open(e,t)},te=new w({popupSelector:"#popup-edit",handleFormSubmit:function(e){Q.editProfile(e).then((function(e){ie.setUserInfo({name:e.name,about:e.about,avatar:e.avatar}),te.close()})).catch((function(e){return console.log(e)})).finally((function(){A.textContent="Сохранить"}))}}),ne=new w({popupSelector:"#popup-avatar",handleFormSubmit:function(e){Q.editAvatar(e).then((function(e){ie.getserverInfo({name:e.name,about:e.about,avatar:e.avatar}),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){A.textContent="Сохранить"}))}}),re=function(e){var t=new r(e,"#create-element-template",ee,ce,ue,X).generateCard();oe.addItem(t,"append")},oe=new u({renderer:re},".elements__list"),ie=new O({userNameSelector:".profile__name",userAboutSelector:".profile__activity",userAvatarSelector:".profile__avatar"});function ue(e){Q.changeLike(e.getId(),e.isLiked()).then((function(t){console.log("новые лайки",t),e.setLikesData(t)})).catch((function(e){return console.log(e)}))}var le=new $({popupSelector:"#popup-delete"},null),ae=function(){le.open(),console.log("delete?")};function ce(e){ae(),le.setHendleSubmit((function(){Q.removeCard(e.getId()).then((function(){console.log("успешно удалена"),e.remove(),le.close()})).catch((function(e){return console.log(e)}))}))}Y.setEventListeners(),q.addEventListener("click",(function(){te.open(),fe.disabledButton(A),fe.resetValidation(),console.log("EDIT-OPEN"),te.setInputValues(ie.getUserInfo())})),te.setEventListeners(),T.addEventListener("click",(function(){ne.open(),pe.disabledButton(A),pe.resetValidation(),console.log("EDIT-аватар")})),ne.setEventListeners(),R.addEventListener("click",(function(){Z.open(),se.resetValidation(),se.disabledButton(A),console.log("ADD-OPEN")})),Z.setEventListeners(),le.setEventListeners();var se=new L(C,V);se.enableValidation();var fe=new L(C,B);fe.enableValidation();var pe=new L(C,I);pe.enableValidation()})();