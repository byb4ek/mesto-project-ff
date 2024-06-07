import { addLikeCard, deleteLikeCard } from "./api";
/* import { id } from "./api"; */

export function createCard(infoCard ,template ,likeCard ,openPopupImage ,deleteCard) {
  const card = template.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardDeleteButton = card.querySelector(".card__delete-button");
  const cardLikeButton = card.querySelector(".card__like-button");
	const cardCountLike = card.querySelector(".card__count__like");
	console.log(infoCard._id);
 /*  cardCountLike.textContent = infoCard.likes.length;
	console.log(infoCard.likes.length); */
	/* postAddLikeCard(infoCard.likes.length);  */
	
  cardImage.alt = infoCard.name;
  cardImage.src = infoCard.link;
  cardTitle.textContent = infoCard.name;
  cardDeleteButton.addEventListener("click", () => {
    deleteCard(card);
  });
	
/* 	const isLiked = infoCard.likes.some((like)=>{like._id===id});
	if (isLiked){
	likeCard();
	} */

  cardLikeButton.addEventListener("click", ()=>{
		//LikesCallback(cardCountLike,cardLikeButton,infoCard)
		likeCard
	});

	cardImage.addEventListener("click", ()=>{openPopupImage(infoCard)});
  return card;
}

export function deleteCard(card) {
  card.remove();
}

export function likeCard(evt){
		evt.target.classList.toggle('card__like-button_is-active');
}

/* function LikesCallback(countLike, likeButton, card){
	console.log(card);
	if (likeButton.classList.contains("card__like-button_is-active")){
		//если лайк уже поставлен 
		//console.log(card);
		deleteLikeCard(card._id)
			.then((res)=>{
				const dannyeCard = res.json();
				console.log(dannyeCard);
				likeCard();
				countLike.textContent = res.likes.length;
			})
			.catch ((err)=>{
				console.error("Произошла ошибка при удалении лайка:",err);
			});
	} else {
		//если лайк хочем поставить 
		addLikeCard(card._id)
			.then((res)=>{
				likeCard();
				countLike.textContent = res.likes.length;
			})
			.catch ((err)=>{
				console.error("Произошла ошибка при добавлении лайка:",err);
			});
	}
} */