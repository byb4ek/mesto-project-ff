export function openModal(currentPopup) {
  currentPopup.addEventListener("click", clickOverlay);
	document.addEventListener("keydown",escKeyPressClose);
  currentPopup.classList.add("popup_is-opened");
}

export function closeModal(currentPopup) {
  currentPopup.classList.remove("popup_is-opened");
}

export function clickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const popup = document.querySelector(".popup_is-opened");
    if (popup) {
      closeModal(popup);
    }
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

