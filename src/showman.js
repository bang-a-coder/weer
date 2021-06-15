export function showman(obj){
	console.log(obj)

	let temp = document.querySelector('#temp')
	let feelsLike = document.querySelector('#feels-like')
	let cityName = document.querySelector('#city-name')
	let cloud = document.querySelector('.cloud')
	let wind = document.querySelector('.wind')

	temp.innerHTML = obj.main.temp + '°'
	feelsLike.innerHTML = obj.main.feels_like
	cityName.innerHTML = obj.name
	cloud.innerHTML = obj.weather[0].description
}