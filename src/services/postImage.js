import axios from 'axios';
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dzsyqjq3i/image/upload';

async function uploadPostImage(data) {
	const dataImage = await axios({
		url: CLOUDINARY_URL,
		method: 'POST',
		data,
	});
	return dataImage;
}

export { uploadPostImage };
