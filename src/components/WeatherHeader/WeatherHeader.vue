<template>
  <header class="weather-header">
    <nav class="weather-nav container">
      <router-link to="/" class="weather-logo">
        <div class="logo-icon">
          <i class="iconfont icon-fa-sun-o logo-text"></i>
          <p class="logo-text">新中地天气</p>
        </div>
      </router-link>
      <div class="weather-info">
        <template v-if="city">
          <h4>{{ city }}</h4>
          <span>实时天气：{{ weatherInfo }} {{ temperature }}℃</span>
          <span>{{ windDirection }}风{{ windSpeed }}级</span>
        </template>
      </div>
      <div class="operation-icons">
        <i class="iconfont icon-fa-circle-info icon-text" @click="openModal"></i>
        <i class="iconfont icon-fa-plus icon-text"></i>
      </div>
    </nav>
  </header>
  <TipsModal v-model:modal="modal" v-model:showModal="showModal" />
</template>

<script setup>
import TipsModal from './TipsModal.vue'
import { ref, onMounted } from 'vue'
import { getPlaceByIp, getWeather } from '@/api/weather'

// 与tipsmodal组件通信, 控制modal显示隐藏
const modal = ref(null) // 绑定在子组件获取的modal实例
const showModal = ref(false)

const city = ref('') // 城市名称
const weatherInfo = ref('') // 天气信息
const temperature = ref('') // 温度
const windDirection = ref('') // 风向
const windSpeed = ref('') //风速

const openModal = () => {
  showModal.value = true
  modal.value.showModal()
}

onMounted(async () => {
  const { adcode } = await getPlaceByIp()

  ;({
    city: city.value,
    weather: weatherInfo.value,
    temperature: temperature.value,
    winddirection: windDirection.value,
    windpower: windSpeed.value,
  } = await getWeather(adcode).then(res => res.lives[0]))
})
</script>

<style lang="scss" scoped>
@import 'http://at.alicdn.com/t/c/font_4703142_fma2xhojtgs.css';
.weather-header {
  position: sticky;
  top: 0px;
  background-color: rgb(0 102 138 / 1);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  z-index: 10;
  .weather-nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: rgb(255 255 255 / 1);
  }
  .weather-logo {
    color: inherit;
    text-decoration: none;
    .logo-icon {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      .icon-fa-sun-o {
        font-weight: 900;
      }
      .logo-text {
        font-size: 1.5rem;
        line-height: 2rem;
      }
    }
  }
  .weather-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    h4 {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
    span {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
  .operation-icons {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    .icon-text {
      font-size: 1.25rem;
      font-weight: 900;
      line-height: 1.75rem;
      transition-duration: 1s;
      cursor: pointer;
      &:hover {
        color: rgb(0 78 113 / 1);
      }
    }
  }
}
</style>
