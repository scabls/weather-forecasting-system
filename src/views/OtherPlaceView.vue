<template>
  <main class="search-weather">
    <template v-if="temperature">
      <article class="location-info">
        你正在预览{{ areaName }}的天气信息<span>，可以通过右上角的"+"号按钮保存起来</span>
      </article>
      <article class="weather-info container">
        <h1>当日气温是：{{ temperature }}摄氏度</h1>
        <h1>当日天气是：{{ weatherInfo }}</h1>
        <h1>当日风向是：{{ windDirection }}风</h1>
        <h1>当日风力是：{{ windSpeed }}级</h1>
      </article>
      <hr />
      <article class="chart-info container">
        <WeatherForecast :casts="casts" />
      </article>
    </template>
    <article class="loading-info" v-else>{{ areaName }}的天气信息正在加载中...</article>
  </main>
</template>

<script setup>
import WeatherForecast from '@/components/WeatherForecast.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getWeather, getForecast } from '@/api/weather'
import { useWeatherStore } from '@/stores/weather'

const { setPath } = useWeatherStore()
const route = useRoute()

const { adcode } = route.params
const { search: areaName } = route.query
const casts = ref([])
const weatherInfo = ref('') // 天气信息
const temperature = ref('') // 温度
const windDirection = ref('') // 风向
const windSpeed = ref('') //风速

setPath(route.path)

onMounted(async () => {
  ;({
    weather: weatherInfo.value,
    temperature: temperature.value,
    winddirection: windDirection.value,
    windpower: windSpeed.value,
  } = await getWeather(adcode).then(res => res.lives[0]))
  ;({ casts: casts.value } = await getForecast(adcode).then(res => res.forecasts[0]))
})
</script>

<style lang="scss" scoped>
.search-weather {
  display: flex;
  flex-direction: column;
  color: rgb(255 255 255 / 1);
  .location-info {
    background-color: rgb(0 78 113 /1);
    padding: 0.5rem;
    text-align: center;
  }
  .weather-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  hr {
    margin: 0;
    margin-top: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
    border-color: rgb(255 255 255 / 0.1);
  }
  .loading-info {
    padding: 2rem 0;
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
