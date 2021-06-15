export async function fetchCurrentData(city, system){
	let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=56211995b80635f33dc2f884e78a693e`, {
		mode: "cors"
	})

	let parsedData = await response.json()

	converter(parsedData, system)

	return parsedData
}

function converter(obj, type){
	if (type == 'c') {	// if its celcius
		obj.main.feels_like = Math.round(obj.main.feels_like - 273.15)
		obj.main.temp = Math.round(obj.main.temp - 273.15)
		obj.main.temp_max = Math.round(obj.main.temp_max - 273.15)
		obj.main.temp_min = Math.round(obj.main.temp_min - 273.15)
	}

	if (type == 'f') {
		obj.main.feels_like = Math.round((obj.main.feels_like - 273.15)* 9/5 + 32)
		obj.main.temp = Math.round((obj.main.temp - 273.15)* 9/5 + 32)
		obj.main.temp_max = Math.round((obj.main.temp_max - 273.15)* 9/5 + 32)
		obj.main.temp_min = Math.round((obj.main.temp_min - 273.15)* 9/5 + 32)	
	}
}

