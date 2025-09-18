const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather"
const LOCATION_API = "http://api.openweathermap.org/geo/1.0/direct"
const API_KEY = "5a7876a58dcdee34f7cfd242e8126b33"

export const getWeatherFromLocation = async ({ body }, res) => {
    try {
        const { city, countryCode, limit } = body

        // Get location
        const urlLocation = `${LOCATION_API}?q=${city},${countryCode}&limit=${limit}&appid=${API_KEY}`
        const resLocation = await fetch(urlLocation);
        const resultLocation = await resLocation.json()

        const location = resultLocation[0]

        // Get weather
        const urlWeather = WEATHER_API + "?lat=" + location.lat + "&lon=" + location.lon + "&units=metric" + "&appid=" + API_KEY
        const resWeather = await fetch(urlWeather);
        const resultWeather = await resWeather.json()

        if (resultWeather != null) {
            return res.json(resultWeather);
        }
        else {
            res.status(400).json({"Message": "Error: Unable to fetch weather data."})
        }
        
    } catch (error) {
        console.log(error)
        res.status(400).json({"Message": "Error: Unable to fetch weather data."})
    }

}

export const getLocation = async ({ body }, res) => {
    try {
        const { city, countryCode, limit } = body

        const url = `${LOCATION_API}?q=${city},${countryCode}&limit=${limit}&appid=${API_KEY}`
        const resFetch = await fetch(url);

        const result = await resFetch.json()
        console.log(result)

        if (result != null) {
            return res.json(result);
        }
        else {
            res.status(400).json({"Message": "Error: Unable to fetch weather data."})
        }
        
    } catch (error) {
        console.log(error)
        res.status(400).json({"Message": "Error: Unable to fetch weather data."})
    }

}

export const getWeather = async ({ body }, res) => {
    try {
        const { latitude, longitude } = body

        const url = WEATHER_API + "?lat=" + latitude + "&lon=" + longitude + "&units=metric" + "&appid=" + API_KEY
        const resFetch = await fetch(url);

        const result = await resFetch.json()
        console.log(result)

        if (result != null) {
            return res.json(result);
        }
        else {
            res.status(400).json({"Message": "Error: Unable to fetch weather data."})
        }
        
    } catch (error) {
        console.log(error)
        res.status(400).json({"Message": "Error: Unable to fetch weather data."})
    }

}