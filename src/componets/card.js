import { queryDeleteCard, addLikeCard, deleteLikeCard } from "./api";
import { openModal, closeModal } from "./modal";

export function createCard(
  infoCard,
  template,
  like,
  openPopupImage,
  deleteCard,
  userId
) {
  const card = template.querySelector(".card").cloneNode(true);
  const cardCountLike = card.querySelector(".card__count__like");
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardDeleteButton = card.querySelector(".card__delete-button");
  const cardLikeButton = card.querySelector(".card__like-button");

  const deleteCardModal = document.querySelector(".popup_type_delete-card");
  const deleteCardForm = document.forms["delete-card"];

  const cardId = infoCard._id;

  cardCountLike.textContent = infoCard.likes.length;

  cardImage.alt = infoCard.name;
  cardImage.src = infoCard.link;
  cardTitle.textContent = infoCard.name;

  if (infoCard.owner._id === userId) {
    cardDeleteButton.addEventListener("click", () => {
      cardDeleteModal(deleteCardForm, deleteCardModal, card, cardId);
    });
  } else {
    cardDeleteButton.style.display = "none";
  }
  cardLikeButton.addEventListener("click", () => {
    like(cardCountLike, cardLikeButton, infoCard);
  });

  const isLiked = infoCard.likes.some((like) => {
    return like._id === userId;
  });
  if (isLiked) {
    cardLikeButton.classList.add("card__like-button_is-active");
    console.log(cardLikeButton);
  }

  cardImage.addEventListener("click", () => {
    openPopupImage(infoCard);
  });
  return card;
}

function cardDeleteModal(
  deleteCardForm,
  deleteCardModal,
  cardToDelete,
  cardToDeleteId
) {
  openModal(deleteCardModal);
  deleteCardForm.addEventListener("submit", () => {
    closeModal(deleteCardModal);
    deleteCard(cardToDelete, cardToDeleteId);
  });
}

export function deleteCard(card, cardId) {
  return queryDeleteCard(cardId)
    .then(() => {
      card.remove();
    })
    .catch((err) => console.error("Ошибка при удалении", err));
}

export function like(countLike, likeButton, card) {
  const isLiked = likeButton.classList.contains("card__like-button_is-active");
  const likeMethod = isLiked ? deleteLikeCard : addLikeCard;
  likeMethod(card._id)
    .then((res) => {
      likeButton.classList.toggle("card__like-button_is-active");
      countLike.textContent = res.likes.length;
    })
    .catch((err) => console.error("Произошла ошибка при удалении лайка", err));
}
