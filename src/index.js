import { showman } from "./showman";
import "./styles.scss";
import { fetchCurrentData } from "./weatherjs";

let unit = 'c'
let location

async function main(city, unit){
	let weatherData = await fetchCurrentData(city, unit)

	showman(weatherData) // visualise relusts
	location = weatherData.name
}

function search(e){
	console.log(e.keyCode)
	if (e.keyCode === 13 || e === 'click') {
		let query = document.querySelector('input').value
		main(query, unit)
	}
}

document.querySelector('.switcharoo').addEventListener('change',()=>{
	if (document.querySelector('.switcharoo').checked){
		unit = 'f'
		main(location, unit)
	} else{
		unit = 'c'
		main(location, unit)
	}
})

document.querySelector('#search-button').addEventListener('click', () => search('click'))
document.querySelector('#search-button').addEventListener('keyup', (e) => search(e))

main('amsterdam', unit)