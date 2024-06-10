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
  fetch(`${config.baseUrl}users/me`, {
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
  fetch(`${config.baseUrl}cards`, {
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
  //айди самой карточки
  fetch(`${config.baseUrl}cards/${id}`, {
    method: "DELETE",
    headers: config.headers,
    body: JSON.stringify({
      _id: ``,
    }),
  })
    .then((res) => {
      console.log(res);
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};

//Постановка лайка
export const addLikeCard = (id) => {
  fetch(`${config.baseUrl}cards/likes/${id}`, {
    //айди самой карточки
    method: "PUT",
    headers: config.headers,
    body: JSON.stringify({
      _id: `${id}`,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Снятие лайка
export const deleteLikeCard = (id) => {
  fetch(`${config.baseUrl}cards/likes/${id}`, {
    //айди самой карточки
    method: "DELETE",
    headers: config.headers,
    body: JSON.stringify({
      _id: `${id}`,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//Обновление аватара
export const updateAvatar = (avatarLink) => {
  fetch(`${config.baseUrl}users/me/avatar`, {
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
