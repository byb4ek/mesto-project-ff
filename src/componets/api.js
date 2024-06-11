const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-16/",
  headers: {
    authorization: "dfed8c7f-1aa1-4d55-99dd-6ae0cf4089ca",
    "Content-Type": "application/json",
  },
};

//информация о пользователе компьютера
export const userInfo = () => {
  return fetch(`${config.baseUrl}users/me`, {
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//информация о карточках когорты
export const cogortCard = () => {
  return fetch(`${config.baseUrl}cards`, {
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Редактирование профиля
export const editProfile = (about, name) => {
  return fetch(`${config.baseUrl}users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      about: `${about}`,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Добавление новой карточки
export const addNewCard = (nameCard, linkCard) => {
  return fetch(`${config.baseUrl}cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: `${nameCard}`,
      link: `${linkCard}`,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Удаление карточки
export const queryDeleteCard = (id) => {
 return fetch(`${config.baseUrl}cards/${id}`, {
    method: "DELETE",
    headers: config.headers
  })
	.then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Добавление лайка
export const addLikeCard = (id) => {
  return fetch(`${config.baseUrl}cards/likes/${id}`, {
    method: "PUT",
    headers: config.headers
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Снятие лайка
export const deleteLikeCard = (id) => {
  return fetch(`${config.baseUrl}cards/likes/${id}`, {
    method: "DELETE",
    headers: config.headers
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Обновление аватара
export const updateAvatar = (avatarLink) => {
  return fetch(`${config.baseUrl}users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      link: `${avatarLink}`,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
