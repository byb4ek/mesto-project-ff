import "../src/index.css";
import { initialCards } from "./cards";
import { openModal, closeModal, clickOverlay,escKeyPressClose } from "./componets/modal";
import { createCard, deleteCard,likeCard } from "./componets/card";

const template = document.querySelector("#card-template").content;
const cardList = document.querySelector(".places__list");

const popupAll = document.querySelectorAll('.popup');
const popupCloseAll = document.querySelectorAll('.popup__close');
const profileEditButton = document.querySelector(".profile__edit-button");
const popupNewCard = document.querySelector(".profile__add-button");

const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector('.popup_type_image');

/* const popupCloseEdit = popupTypeEdit.querySelector(".popup__close");
const popupCloseCard = popupTypeNewCard.querySelector(".popup__close");
const popupCloseImage = popupTypeImage.querySelector(".popup__close"); */

const formNewCard = document.forms["new-place"];
const titleNewCard =formNewCard["place-name"]; 
const urlNewCard = formNewCard.link;

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const formElement = document.querySelector(".popup__content"); 
const nameInput =formElement.querySelector(".popup__input_type_name"); 
const jobInput = formElement.querySelector(".popup__input_type_description");

profileEditButton.addEventListener("click",()=>{
	openModal(popupTypeEdit),dataToForm(profileTitle,profileDescription)
});

popupNewCard.addEventListener("click", ()=>{openModal(popupTypeNewCard)});
/* popupCloseEdit.addEventListener("click", ()=>{closeModal(popupTypeEdit)});
popupCloseCard.addEventListener("click", ()=>{closeModal(popupTypeNewCard)}); */

formElement.addEventListener('submit', handleFormSubmit);

formNewCard.addEventListener('submit', addCard);

initialCards.forEach((item) => {
  const saveCard = createCard(item,template,likeCard,popupImage,deleteCard);
  cardList.append(saveCard);
});

popupAll.forEach((item)=>{
	item.classList.add("popup_is-animated");
});

popupCloseAll.forEach((item)=>{
	item.addEventListener("click",()=>{
		const popup = item.closest('.popup');
		closeModal(popup);
	});
});



function dataToForm (title,descript){
	const formEditProfile = document.forms["edit-profile"];
	const name = formEditProfile.name;
	const describe = formEditProfile.description;
	name.value = title.textContent;
	describe.value = descript.textContent;
}

function handleFormSubmit(evt) {
    evt.preventDefault(); 
		const jobValue = jobInput.value;
		const nameValue = nameInput.value;
		profileTitle.textContent = nameValue;
		profileDescription.textContent = jobValue;
	/* 	closeModal(popupTypeEdit); */
}

function addCard(evt) {
	evt.preventDefault(); 
	const titleCard = titleNewCard.value;
	const urlCard = urlNewCard.value;
	const newCards = {};
	newCards.name = titleCard;
	newCards.link = urlCard;
	const saveNewCard=createCard(newCards,template,likeCard,popupImage,deleteCard);
	/* closeModal(popupTypeNewCard); */
  cardList.prepend(saveNewCard);
	formNewCard.reset();
}

function popupImage(cardInfo){
	const imgPop = popupTypeImage.querySelector('.popup__image');
	const caption = popupTypeImage.querySelector('.popup__caption');
  imgPop.alt = cardInfo.name;
  imgPop.src = cardInfo.link;
	caption.textContent=cardInfo.name;
	/* popupCloseImage.addEventListener("click", ()=>{closeModal(popupTypeImage)}); */
	
	openModal(popupTypeImage);
	console.log("das");
}