<template>
  <main class="container">
    <SearchPlace v-model="isInputing" />
    <PlacesList :class="{ 'move-down': isInputing }" />
    <h2 class="forecast-title">近期天气</h2>
    <LocalForecast />
  </main>
</template>

<script setup>
import SearchPlace from '@/components/SearchPlace.vue'
import PlacesList from '@/components/PlaceList/PlacesList.vue'
import LocalForecast from '@/components/LocalForecast.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useWeatherStore } from '@/stores/weather'

const isInputing = ref(false)

const { setPath, resetAreaName, resetAdcode } = useWeatherStore()
const { path } = useRoute()

setPath(path)
resetAreaName()
resetAdcode()
</script>

<style lang="scss" scoped>
.container {
  color: rgb(255 255 255 /1);
  .forecast-title {
    margin-top: 1.5rem;
  }
}
</style>
