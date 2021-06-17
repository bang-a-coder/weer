import countryCodeEmoji from "country-code-emoji"

export function showman(obj){
	console.log(obj)

	let temp = document.querySelector('#temp')
	let feelsLike = document.querySelector('#feels-like')
	let cityName = document.querySelector('#city-name')
	let cloudDesc = document.querySelector('.cloud-desc')
	let wind = document.querySelector('.wind')
	let cloudIcon = document.querySelector('.cloud-icon')	
	console.log(cloudIcon)

	temp.innerHTML = obj.main.temp + '°'
	feelsLike.innerHTML = obj.main.feels_like
	cityName.innerHTML = obj.name + countryCodeEmoji(obj.sys.country)
	cloudDesc.innerHTML = obj.weather[0].description
	cloudIcon.src = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`

	console.log(obj.weather[0].icon)
}