import request from './request'

const userKey = '689eba72d7feb84148d6e426c80704db'

/**
 * 通过IP获取当前位置信息
 * @returns axios的get请求
 */
const getPlaceByIp = () => request.get(`/ip?key=${userKey}`)

/**
 * 通过地址获取城市编码
 * @param {*} address 地址
 * @returns axios的get请求
 */
const getAdcode = address => request.get(`/geocode/geo?address=${address}&key=${userKey}`)

/**
 * 通过城市编码获取当日天气信息
 * @param {*} adcode 城市编码
 * @returns axios的get请求
 */
const getWeather = adcode => request.get(`/weather/weatherInfo?city=${adcode}&key=${userKey}`)

/**
 * 通过城市编码获取天气预报
 * @param {*} adcode 城市编码
 * @returns axios的get请求
 */
const getForecast = adcode =>
  request.get(`/weather/weatherInfo?city=${adcode}&key=${userKey}&extensions=all`)

export { getPlaceByIp, getAdcode, getWeather, getForecast }
