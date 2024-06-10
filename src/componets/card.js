import { queryDeleteCard } from "./api";

export function createCard(infoCard ,template ,likeCard ,openPopupImage ,deleteCard,userId) {
  const card = template.querySelector(".card").cloneNode(true);
	const cardCountLike = card.querySelector(".card__count__like");
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardDeleteButton = card.querySelector(".card__delete-button");
  const cardLikeButton = card.querySelector(".card__like-button");
	
  cardImage.alt = infoCard.name;
  cardImage.src = infoCard.link;
  cardTitle.textContent = infoCard.name;
	//отвечает за количество лайков поставленных на карточку
	//console.log(infoCard);
  cardCountLike.textContent = infoCard.likes.lenght;
	
	//слушатель лайка
  cardLikeButton.addEventListener("click", likeCard);
	//слушатель удаления карточки владельцем
	console.log(infoCard);
	if (infoCard.owner._id === userId){
		cardDeleteButton.addEventListener("click",()=>{
			const cardId = infoCard._id;
			deleteCard(card, cardId);
			queryDeleteCard(cardId);
		})
	} else {
  cardDeleteButton.style.display = "none";
	}
	//Проверка наличия лайка в массиве 

	//слушатель открытия картинки
	cardImage.addEventListener("click", ()=>{openPopupImage(infoCard)});
	
  return card;
}

export function deleteCard(card, cardId) {
  card.remove();
//	queryDeleteCard(card);
}

export function likeCard(evt){
		evt.target.classList.toggle('card__like-button_is-active');
}