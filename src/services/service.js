import error from '../assets/svg/error.svg';

//const BACKEND_URL = '';
const PARSE_IMAGE_URL = 'http://localhost:3001';

async function getImage(image_id) {
	const res = await fetch(`${PARSE_IMAGE_URL}/getImage?image_id=${image_id}`);
	if(res.status === 200)
		return res;
	else
		return error;
}

export { getImage };
