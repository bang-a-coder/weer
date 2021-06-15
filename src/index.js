import { showman } from "./showman";
import "./styles.scss";
import { fetchCurrentData } from "./weatherjs";


async function main(city){
	let weatherData = await fetchCurrentData(city, 'c')

	showman(weatherData) // visualise relusts
}

function search(e){
	console.log(e.keyCode)
	if (e.keyCode === 13 || e === 'click') {
		let query = document.querySelector('input').value

		main(query)
	}
}

document.querySelector('#search-button').addEventListener('click', () => search('click'))
document.querySelector('#search-button').addEventListener('keyup', (e) => search(e))

main('amsterdam')