const weatherKey = import.meta.env.VITE_OWEATHER_KEY
import axios from 'axios'
'https://openweathermap.org/img/wn/10d@2x.png'

const setLocation = (lat, long) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherKey}`


const getWeather = (lat, long) => {
    const baseUrl = setLocation(lat, long)
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default {getWeather}