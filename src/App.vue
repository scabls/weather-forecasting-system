<template>
  <WeatherHeader />
  <router-view></router-view>
</template>

<script setup>
import WeatherHeader from './components/WeatherHeader.vue'
</script>

<style lang="scss">
@import 'reset-css';
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
* {
  box-sizing: border-box;
}
:root {
  line-height: 1.5;
  body {
    line-height: inherit;
  }
}
#app {
  min-height: 100vh;
  background-color: rgb(0 102 138 / 1);
}
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 10rem;
}
</style>
