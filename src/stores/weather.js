import useWeather from '@/hooks/useWeather'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useWeatherStore = defineStore('weather', () => useWeather())

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWeatherStore, import.meta.hot))
}
