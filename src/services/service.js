import error from '../assets/svg/error.svg';

const BACKEND_URL = 'https://4a78-212-220-84-250.ngrok.io';
const PARSE_IMAGE_URL = 'http://localhost:3001';

async function getImage(image_id) {
	const res = await fetch(`${PARSE_IMAGE_URL}/getImage?image_id=${image_id}`);
	if(res.status === 200)
		return res;
	else
		return error;
}

async function addToSeen(item_id) {
	fetch(`${BACKEND_URL}/neural/seen`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			user: {
				user_id: getId(),
			},
			item: {
				item_id,
			},
		}),
	});
}

async function addToCart(item_id) {
	fetch(`${BACKEND_URL}/neural/cart`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			user: {
				user_id: getId(),
			},
			item: {
				item_id,
			},
		}),
	});
}

async function generateNeuralByUser() {
	const res = await fetch(`${BACKEND_URL}/neural/generate_user?top_n=6`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			user_id: getId(),
		}),
	});
	if(res.status === 200)
		return res;
	else
		return [];
}

async function generateNeuralByItem(item_id) {
	const res = await fetch(`${BACKEND_URL}/neural/generate_item?top_n=4&item_id=${item_id}`);
	return res;
}

async function getItemById(item_id) {
	const res = await fetch(`${BACKEND_URL}/catalog/item?item_id=${item_id}`);
	if(res.status === 200)
		return res;
	else
		return null;
	/*return new Promise((resolve) => {
		resolve({
			id: 123,
			cte_id: 2737727,
			cte_name: 'Рояль v2.0',
			category_id: 23,
			suppliers: [
				{
					Name: 'OOO "Ramada" отель',
					Inn: 5698965632,
				},
			],
			description: 'The best',
			regions: ['Москва', 'Свердловская область'],
			made_contracts: 33,
			country: 'US',
			price: [
				{ Cost: 454 },
				{ Cost: 125 },
			], 
		});
	});*/
}

function getId() {
	if(sessionStorage.getItem('id'))
		sessionStorage.setItem('id', generateId());
	return sessionStorage.getItem('id');

	function generateId() {
		let str = '';
		for(let i = 0; i < 10; i++)
			str+=String.fromCharCode(Math.floor(Math.random() * 25 + 65));
		return str;
	}
}

export {
	getImage,
	addToSeen,
	addToCart,
	generateNeuralByUser,
	generateNeuralByItem,
	getItemById,
};
