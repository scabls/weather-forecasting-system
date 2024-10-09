<template>
  <WeatherForecast :casts="casts" />
</template>

<script setup>
import WeatherForecast from './WeatherForecast.vue'
import { ref, onMounted } from 'vue'
import { getPlaceByIp, getForecast } from '@/api/weather'

const casts = ref([])

onMounted(async () => {
  const { adcode } = await getPlaceByIp()

  ;({ casts: casts.value } = await getForecast(adcode).then(res => res.forecasts[0]))
})
</script>

<style scoped></style>
