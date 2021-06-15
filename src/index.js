import { showman } from "./showman";
import "./styles.scss";
import { fetchCurrentData } from "./weatherjs";


async function main(city){
	let weatherData = await fetchCurrentData(city, 'c')

	// console.log(weatherData)
	showman(weatherData)
}

function search(){
	let query = document.querySelector('input').value

	main(query)
}

document.querySelector('#search-button').addEventListener('click', search)

main('athens')