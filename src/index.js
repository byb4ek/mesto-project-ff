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

//вешаем на кнопку закрытия слушатель и передаем колбеком 
// (через анонимную функцию) 
// общий класс который нужно закрыть

profileEditButton.addEventListener("click",()=>{
	openModal(popupTypeEdit),dataToForm(profileTitle,profileDescription)
});
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

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

function dataToForm (title,descript){
	const formEditProfile = document.forms["edit-profile"];
	const name = formEditProfile.name;
	const describe = formEditProfile.description;
	name.value = title.textContent;
	describe.value = descript.textContent;
}

const formElement = document.querySelector(".popup__content"); 
const nameInput =formElement.querySelector(".popup__input_type_name"); 
const jobInput = formElement.querySelector(".popup__input_type_description");

function handleFormSubmit(evt) {
    evt.preventDefault(); 
		const jobValue = jobInput.value;
		const nameValue = nameInput.value;
		profileTitle.textContent = nameValue;
		profileDescription.textContent = jobValue;
		closeModal(popupTypeEdit);
}

/* formElement.addEventListener('submit', handleFormSubmit);

const formNewCard = document.querySelector(".popup__form"); 
const titleNewCard =formElement.querySelector(".popup__input_type_card-name"); 
const urlNewCard = formElement.querySelector(".popup__input_type_url");

function addCard(evt) {
	evt.preventDefault(); 
	const titleCard = titleNewCard.value;
	const urlCard = urlNewCard.value;
	console.log(titleCard);
	console.log(urlCard);

	const newCards = [{}];
	newCards.name = titleCard;
	newCards.link = urlCard;
	console.log(newCards);
	const saveNewCard=createCard(newCards,template,deleteCard);
	closeModal(popupTypeNewCard);
  cardList.append(saveNewCard);

}

formNewCard.addEventListener('submit', addCard); */
