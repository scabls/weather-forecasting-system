import request from './request'

const userKey = '689eba72d7feb84148d6e426c80704db'

const getPlaceByIp = () => request.get(`/ip?key=${userKey}`)

const getAdcode = address => request.get(`/geocode/geo?address=${address}&key=${userKey}`)

const getWeather = adcode =>
  request.get(`/weather/weatherInfo?city=${adcode}&key=${userKey}&extensions=all`)

export { getPlaceByIp, getAdcode, getWeather }
