<template>
  <WeatherHeader />
  <router-view></router-view>
</template>

<script setup>
import WeatherHeader from './components/WeatherHeader.vue'
</script>

<style>
@import 'reset-css';
* {
  box-sizing: border-box;
}
#app {
  min-height: 100vh;
  background-color: rgb(0 102 138 / 1);
}
</style>
