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
		obj.main.feels_like = normalConv(obj.main.feels_like)
		obj.main.temp = normalConv(obj.main.temp)
		obj.main.temp_max = normalConv(obj.main.temp_max)
		obj.main.temp_min = normalConv(obj.main.temp_min)
	}

	if (type == 'f') {
		obj.main.feels_like = retardConv(obj.main.feels_like)
		obj.main.temp = retardConv(obj.main.temp)
		obj.main.temp_max = retardConv(obj.main.temp_max)
		obj.main.temp_min = retardConv(obj.main.temp_min)	
	}

	function normalConv(og){
		return Math.round(og - 273.15)
	}

	function retardConv(og){
		return Math.round((og- 273.15) * 9/5 + 32)
	}
}

