export async function weather(city){
	let data = await fetchCurrentData(city)


	return data
}


export async function fetchCurrentData(city){
	let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=56211995b80635f33dc2f884e78a693e`, {
		mode: "cors"
	})

	let parsedData = await response.json()

	return parsedData
}

