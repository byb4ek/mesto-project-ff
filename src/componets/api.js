const baseUrl='https://nomoreparties.co/v1/wff-cohort-16/';
/* export const id = 'dfed8c7f-1aa1-4d55-99dd-6ae0cf4089ca'; */
const authorization = {
	headers: {
		authorization: 'dfed8c7f-1aa1-4d55-99dd-6ae0cf4089ca'
	}
};


export function userInfo(){
	return fetch(`${baseUrl}users/me`, authorization)
  .then(res => {return res.json()})
}

export function cogortCard(){
	return fetch(`${baseUrl}cards`, authorization)
	.then(res => {return res.json()})
}


export function editProfile(about,name){
	fetch(`${baseUrl}users/me`, {
  method: 'PATCH',
  headers: {
    authorization: 'dfed8c7f-1aa1-4d55-99dd-6ae0cf4089ca',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: `${name}`,
    about:  `${about}`
  })
});
}

export function addNewCard(nameCard,linkCard){
	fetch(`${baseUrl}cards`, {
		method: 'POST',
		headers: {
			authorization: 'dfed8c7f-1aa1-4d55-99dd-6ae0cf4089ca',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: `${nameCard}`,
			link: `${linkCard}`
		})
	})
		.then(res=>{console.log(res);})
}

export function addLikeCard(id){
	fetch(`${baseUrl}/cards/likes/${id}`, {
		method: 'PUT',
		headers: {
			authorization: 'dfed8c7f-1aa1-4d55-99dd-6ae0cf4089ca',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			_id: `${id}`,
		})
	})
}

export function deleteLikeCard(id){
	fetch(`${baseUrl}/cards/likes/${id}`, {
		method: 'DELETE',
		headers: {
			authorization: 'dfed8c7f-1aa1-4d55-99dd-6ae0cf4089ca',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			_id: `${id}`,
		})
	})
}

