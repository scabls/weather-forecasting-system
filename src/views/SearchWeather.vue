<template>
  <main class="search-weather">
    <article class="location-info">
      你正在预览濮阳市的天气信息<span>，可以通过右上角的"+"号按钮保存起来</span>
    </article>
    <article class="weather-info container">
      <h1>当日气温是：16摄氏度</h1>
      <h1>当日天气是：阴</h1>
      <h1>当日风向是：北风</h1>
      <h1>当日风力是：≤3级</h1>
    </article>
    <hr />
    <article class="chart-info container">
      <WeatherForecast />
    </article>
  </main>
</template>

<script setup>
import WeatherForecast from '@/components/WeatherForecast.vue'
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
}
</style>
