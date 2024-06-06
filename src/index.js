import "../src/index.css";
import { initialCards } from "./cards";
import { openModal, closeModal } from "./componets/modal";
import { createCard, deleteCard, likeCard } from "./componets/card";
import { clearValidation, enableValidation } from "./componets/validation";
import { cogortCard, userInfo,editProfile,addNewCard ,postAddLikeCard} from "./componets/api";

const template = document.querySelector("#card-template").content;
const cardList = document.querySelector(".places__list");

const popupAll = document.querySelectorAll(".popup");
const popupCloseAll = document.querySelectorAll(".popup__close");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupNewCard = document.querySelector(".profile__add-button");

const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");

const formNewCard = document.forms["new-place"];
const titleNewCard = formNewCard["place-name"];
const urlNewCard = formNewCard.link;

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const formNewProfile = document.forms["edit-profile"];
const titleNewProfile = formNewProfile.name;
const descriptionNewProfile = formNewProfile.description;

const popupContent = document.querySelector(".popup__content");

const validationCofig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

profileEditButton.addEventListener("click", () => {
  openModal(popupTypeEdit);
  clearValidation(formNewProfile, validationCofig);
  fillDataToProfileForm(profileTitle, profileDescription);
});

popupNewCard.addEventListener("click", () => {
  openModal(popupTypeNewCard);
  clearValidation(formNewCard, validationCofig);
});

popupContent.addEventListener("submit", popupEditProfileFormSubmit);
formNewCard.addEventListener("submit", addCard);

/* initialCards.forEach((item) => {
  const saveCard = createCard(
    item,
    template,
    likeCard,
    openPopupImage,
    deleteCard
  );
  cardList.append(saveCard);
}); */

popupAll.forEach((item) => {
  item.classList.add("popup_is-animated");
});

popupCloseAll.forEach((item) => {
  item.addEventListener("click", () => {
    const popup = item.closest(".popup");
    closeModal(popup);
  });
});

function fillDataToProfileForm(title, descript) {
  const formEditProfile = document.forms["edit-profile"];
  const name = formEditProfile.name;
  const describe = formEditProfile.description;
  name.value = title.textContent;
  describe.value = descript.textContent;
}

function popupEditProfileFormSubmit(evt) {
  evt.preventDefault();
  const jobValue = descriptionNewProfile.value;
  const nameValue = titleNewProfile.value;
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
	editProfile(jobValue,nameValue);
  closeModal(popupTypeEdit);
}

function addCard(evt) {
  evt.preventDefault();
  const titleCard = titleNewCard.value;
  const urlCard = urlNewCard.value;
  const newCards = {
    name: titleCard,
    link: urlCard,
  };
  newCards.name = titleCard;
  newCards.link = urlCard;
  const saveNewCard = createCard(
    newCards,
    template,
    likeCard,
    openPopupImage,
    deleteCard
  );
	addNewCard(titleCard,urlCard);
  cardList.prepend(saveNewCard);
  closeModal(popupTypeNewCard);
  formNewCard.reset();
}

function openPopupImage(cardInfo) {
  const imgPop = popupTypeImage.querySelector(".popup__image");
  const caption = popupTypeImage.querySelector(".popup__caption");
  imgPop.alt = cardInfo.name;
  imgPop.src = cardInfo.link;
  caption.textContent = cardInfo.name;
  openModal(popupTypeImage);
}

enableValidation(validationCofig);

/* const arrayPromise = [cogortCard(), userInfo()]; */

Promise.all([cogortCard(), userInfo()])
.then(([card, profile]) => {
  renderCard(card);
  renderProfile(profile);
});

function renderProfile(profile){
	 profileTitle.textContent = profile.name;
   profileDescription.textContent =profile.about;
}

function renderCard(card){
	card.forEach((item) => {
		const saveCard = createCard(
			item,
			template,
			likeCard,
			openPopupImage,
			deleteCard
		);
		cardList.append(saveCard);
	});
}