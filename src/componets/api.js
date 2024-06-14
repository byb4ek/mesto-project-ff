const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-16/",
  headers: {
    authorization: "dfed8c7f-1aa1-4d55-99dd-6ae0cf4089ca",
    "Content-Type": "application/json",
  },
};

const handleResponse = (response) => {
	if (response.ok) {
		return response.json();
	}
	return Promise.reject(`Ошибка: ${response.status}`);
}

//информация о пользователе компьютера
export const userInfo = () => {
  return fetch(`${config.baseUrl}users/me`, {
    headers: config.headers,
  }).then((res) => {
   return handleResponse(res);
  });
};

//информация о карточках когорты
export const cogortCard = () => {
  return fetch(`${config.baseUrl}cards`, {
    headers: config.headers,
  }).then((res) => {
   return handleResponse(res);
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
   return handleResponse(res);
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
   return handleResponse(res);
  });
};

//Удаление карточки
export const queryDeleteCard = (id) => {
 return fetch(`${config.baseUrl}cards/${id}`, {
    method: "DELETE",
    headers: config.headers
  })
	.then((res) => {
   return handleResponse(res);
  });
};

//Добавление лайка
export const addLikeCard = (id) => {
  return fetch(`${config.baseUrl}cards/likes/${id}`, {
    method: "PUT",
    headers: config.headers
  }).then((res) => {
   return handleResponse(res);
  });
};

//Снятие лайка
export const deleteLikeCard = (id) => {
  return fetch(`${config.baseUrl}cards/likes/${id}`, {
    method: "DELETE",
    headers: config.headers
  }).then((res) => {
   return handleResponse(res);
  });
};

//Обновление аватара
export const updateAvatar = (avatar) => {
  return fetch(`${config.baseUrl}users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
     avatar: avatar //можно так писать"avatar" когда названия сопадают (анологичная запись )
    })
  }).then((res) => {
   return handleResponse(res);
  });
};