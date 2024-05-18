import "../src/index.css";
import { initialCards } from "./cards";
import { openModal, closeModal, clickOverlay,escKeyPressClose } from "./componets/modal";
import { createCard, deleteCard } from "./componets/card";

const template = document.querySelector("#card-template").content;
const cardList = document.querySelector(".places__list");

const popupAll = document.querySelectorAll('.popup');
const profileEditButton = document.querySelector(".profile__edit-button");
const popupNewCard = document.querySelector(".profile__add-button");
/* const popupCardImg = document.querySelector('.card__image'); */

const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
/* const popupTypeImage = document.querySelector(".popup_type_image"); */

const popupCloseEdit = popupTypeEdit.querySelector(".popup__close");
const popupCloseCard = popupTypeNewCard.querySelector(".popup__close");
// const popupClose = popupTypeEdit.querySelector(".popup__close");

profileEditButton.addEventListener("click",()=>{openModal(popupTypeEdit)});
popupNewCard.addEventListener("click", ()=>{openModal(popupTypeNewCard)});
popupCloseEdit.addEventListener("click", ()=>{closeModal(popupTypeEdit)});
popupCloseCard.addEventListener("click", ()=>{closeModal(popupTypeNewCard)});

initialCards.forEach((item) => {
  const saveCard = createCard(item,template,deleteCard);
  cardList.append(saveCard);
});

popupAll.forEach((item)=>{
	item.classList.add("popup_is-animated");
});

// Находим форму в DOM
const formElement = document.querySelector(".popup__content"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput =formElement.querySelector(".popup__input_type_name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = formElement.querySelector(".popup__input_type_description");// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
		jobInput.value
		nameInput.value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

formElement.addEventListener('submit', handleFormSubmit);

/* popupClose.forEach((buttonItem)=>{
	buttonItem.addEventListener("click", closeModal);
});
 */

/* popup.addEventListener("click",()=>{
	
}) */

/* const imgCard = querySelector('.card__image');
imgCard.addEventListener("click", ()=>{
	openModal(imgCard);
	console.log('img');
}) */
