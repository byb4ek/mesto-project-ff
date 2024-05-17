import "../src/index.css";
import { initialCards } from "./cards";
import { openModal, closeModal, clickOverlay,escKeyPressClose } from "./componets/modal";
import { createCard, deleteCard } from "./componets/card";

const template = document.querySelector("#card-template").content;
const cardList = document.querySelector(".places__list");

const popup = document.querySelector(".popup");
const popupAll = document.querySelectorAll(".popup");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfileOpen = document.querySelector(".profile__add-button");
const popupClose = document.querySelector(".popup__close");
/* const overlayPopup = document.querySelector('.popup_type_edit'); */

//кнопка редактировать
profileEditButton.addEventListener("click",()=>{openModal(popup)});
//кнопка плюсика
popupProfileOpen.addEventListener("click", ()=>{openModal(popup)});
//кнопка крестика в попапе
popupClose.addEventListener("click", ()=>{closeModal(popup)});
popup.addEventListener("click", clickOverlay);
document.addEventListener("keydown",escKeyPressClose);

initialCards.forEach((item) => {
  const saveCard = createCard(item,template,deleteCard);
  cardList.append(saveCard);
});

popupAll.forEach((item)=>{
	item.classList.add("popup-is_animated");
})