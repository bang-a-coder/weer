import "./styles.scss";
import { fetchCurrentData, weather } from "./weatherjs";
// import image from './search-icon.svg'


console.log('working?')

async function main(city){
	console.log(await fetchCurrentData(city))
}
main("Athens")

function search(){
	let query = document.querySelector('input').value

	main(query)
}

document.querySelector('#search-button').addEventListener('click', search)