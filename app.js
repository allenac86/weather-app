require('dotenv').config();
const fetch = require('node-fetch');

const zipCode = process.argv[2] || 14224;
const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${process.env.API_KEY}`;

fetch(url)
	.then(result => result.json())
	.then(data => {
		const description = data.weather[0].description;
		const temperature = data.main.temp + ' degrees F';
		const city = data.name;
		const feelsLike = data.main.feels_like + ' degrees F';

		const weatherReport = `It is ${temperature} in ${zipCode} (${city}), but feels like ${feelsLike}. The weather can be described as ${description}.`;

		console.log(weatherReport);
	});
