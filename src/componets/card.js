export function createCard(infoCard ,template ,likeCard ,openPopupImage ,deleteCard) {
  const card = template.querySelector(".card").cloneNode(true);
	const cardCountLike = card.querySelector(".card__count__like");
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardDeleteButton = card.querySelector(".card__delete-button");
  const cardLikeButton = card.querySelector(".card__like-button");

  cardCountLike.textContent = infoCard.likes.length;
	
  cardImage.alt = infoCard.name;
  cardImage.src = infoCard.link;
  cardTitle.textContent = infoCard.name;
  cardDeleteButton.addEventListener("click", () => {
    deleteCard(card);
  });
	
  cardLikeButton.addEventListener("click", likeCard);
	cardImage.addEventListener("click", ()=>{openPopupImage(infoCard)});
  return card;
}

export function deleteCard(card) {
  card.remove();
}

export function likeCard(evt){
		evt.target.classList.toggle('card__like-button_is-active');
}