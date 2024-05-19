export function createCard(infoCard,template,likeCard, deleteCard) {
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
	likeCard();
  return card;
}

export function deleteCard(card) {
  card.remove();
}