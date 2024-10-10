<template>
  <article class="local-forecast" v-if="casts.length">
    <h2 class="forecast-title">近期天气</h2>
    <WeatherForecast :casts="casts" />
  </article>
</template>

<script setup>
import WeatherForecast from './WeatherForecast.vue'
import { ref, onMounted } from 'vue'
import { getPlaceByIp, getForecast } from '@/api/weather'

const casts = ref([])

onMounted(async () => {
  try {
    const { adcode } = await getPlaceByIp()
    try {
      ;({ casts: casts.value } = await getForecast(adcode).then(res => res.forecasts[0]))
    } catch (error) {
      console.error('首页大屏预报组件组件根据adcode获取天气信息失败: ', error)
    }
  } catch (error) {
    console.error('首页大屏预报组件根据adcode获取天气信息失败: ', error)
  }
})
</script>

<style lang="scss" scoped>
.local-forecast {
  .forecast-title {
    margin-top: 1.5rem;
  }
}
</style>
