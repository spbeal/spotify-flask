import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname',
  params: {name: 'London'},
  headers: {
    'X-RapidAPI-Key': '37f1b617d5mshf6a7dcccab11389p106381jsn0d5709270c25',
    'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

