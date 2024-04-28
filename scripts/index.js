const template = document.querySelector("#card-template").content;
const cardList = document.querySelector(".places__list");

function createCard(infoCard, deleteCard) {
  const card = template.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardDeleteButton = card.querySelector(".card__delete-button");
  cardImage.alt = infoCard.name;
  cardImage.src = infoCard.link;
  cardTitle.textContent = infoCard.name;
  cardDeleteButton.addEventListener("click", () => {
    deleteCard(card);
  });
  return card;
}

function deleteCard(card) {
  card.remove();
}

initialCards.forEach((item) => {
  const saveCard = createCard(item, deleteCard);
  cardList.append(saveCard);
});