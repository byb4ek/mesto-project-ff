import "../src/index.css";
import { openModal, closeModal } from "./componets/modal";
import { createCard, deleteCard, like } from "./componets/card";
import { clearValidation, enableValidation } from "./componets/validation";
import {
  cogortCard,
  userInfo,
  editProfile,
  addNewCard,
  updateAvatar,
} from "./componets/api";

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

const avatarImage = document.querySelector(".profile__image");
const modalAvatar = document.querySelector(".popup_type_new-avatar");

const avatarForm = document.forms["new-avatar_img"];
const avatarUrlForm = avatarForm.link;

const avatarDiv = document.querySelector(".profile__image");

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

avatarImage.addEventListener("click", () => {
  openModal(modalAvatar);
});

formNewProfile.addEventListener("submit", popupEditProfileFormSubmit);

formNewCard.addEventListener("submit", addCard);

avatarForm.addEventListener("submit", editAvatarFormSubmit);

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

function renderLoading(isLoading, form) {
  //находим спаны на форме
  const saveFormButton = form.button.querySelector(".popup__button__save");
  saveFormButton.textContent = isLoading ? "Сохранение..." : "Сохранить";
}

function popupEditProfileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, formNewProfile);
  const jobValue = descriptionNewProfile.value;
  const nameValue = titleNewProfile.value;
  editProfile(jobValue, nameValue)
    .then((res) => {
			console.log(res);
      profileTitle.textContent = res.name;
      profileDescription.textContent = res.about;
    })
    .catch((err) => renderError(`Ошибка: ${err}`))
    .finally(() => renderLoading(false, formNewProfile));
  closeModal(popupTypeEdit);
}

//добавляем новую карточку
function addCard(evt) {
  evt.preventDefault();
  return addNewCard(titleNewCard.value, urlNewCard.value)
    .then(renderLoading(true, formNewCard))
    .then((card) => {
      cardList.prepend(
        createCard(
          card,
          template,
          like,
          openPopupImage,
          deleteCard,
          card.owner._id
        )
      );
      closeModal(popupTypeNewCard);
      formNewCard.reset();
    })
    .catch((err) => renderError(`Ошибка: ${err}`))
    .finally(() => renderLoading(false, formNewCard));
}

function openPopupImage(cardInfo) {
  const imgPop = popupTypeImage.querySelector(".popup__image");
  const caption = popupTypeImage.querySelector(".popup__caption");
  imgPop.alt = cardInfo.name;
  imgPop.src = cardInfo.link;
  caption.textContent = cardInfo.name;
  openModal(popupTypeImage);
}

//Добавляем на страницу имеющиеся карточки на сервере
function renderCards(cards, userId) {
  cards.forEach((item) => {
    const saveCard = createCard(
      item,
      template,
      like,
      openPopupImage,
      deleteCard,
      userId
    );
    cardList.append(saveCard);
  });
}

function editAvatarFormSubmit(evt) {
  evt.preventDefault();
  const urlValue = avatarUrlForm.value;
  updateAvatar(urlValue)
    .then(renderLoading(true, avatarForm))
    .then((data) => {
      console.log("Submit ", urlValue);
      console.log(data);
      avatarDiv.style.backgroundImage = `url(${data.avatar})`;
      closeModal(modalAvatar);
      avatarForm.reset();
    })
    .catch((err) => renderError(`Ошибка: ${err}`))
    .finally(() => renderLoading(false, avatarForm));
}

enableValidation(validationCofig);

Promise.all([userInfo(), cogortCard()]).then(([user, card]) => {
  //Пишем информацию о пользователе на сайт
  profileTitle.textContent = user.name;
  profileDescription.textContent = user.about;
  const userId = user._id;
  renderCards(card, userId);
  updateAvatar(user.avatar)
    .then((data) => {
      avatarDiv.style.backgroundImage = `url(${data.avatar})`;
    })
    .catch((err) => renderError(`Ошибка: ${err}`));
});
