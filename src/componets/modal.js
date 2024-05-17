export function openModal(evt) {
	//принимает в качестве аргумнета дом элемент модального окна
	// с которым производим действие
	evt.classList.add("popup_is-opened");
	evt.classList.remove("popup_is-animated");
  console.log("enter");
}

export function closeModal(evt) {
	//принимает в качестве аргумнета дом элемент модального окна
	// с которым производим действие
	evt.classList.remove("popup_is-opened");
	evt.classList.add("popup_is-animated");
  console.log("out");
}

export function clickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
		const popup = document.querySelector(".popup_is-opened");
    closeModal(popup);
    console.log("overlay");
  }
}

export function escKeyPressClose(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    if (popup) {
      closeModal(popup);
      console.log("Escape");
    }
  }
}