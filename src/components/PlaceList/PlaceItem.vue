<template>
  <div class="saved-item" @mouseover="isShow = true" @mouseout="isShow = false" v-if="temperature">
    <aside class="item-info" :class="{ hover: isShow }">
      <span>{{ areaName }}</span>
      <span>{{ temperature }}度</span>
    </aside>
    <aside class="item-operation" :class="{ hover: isShow }">
      <button @click="toForecastPage">查看</button>
      <button @click="removePlace(index)">删除</button>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useWeatherStore } from '@/stores/weather'
import { getWeather } from '@/api/weather'

const { removePlace } = useWeatherStore()
const router = useRouter()

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  areaName: {
    type: String,
    required: true,
  },
  adcode: {
    type: String,
    required: true,
  },
})

const isShow = ref(false)
const temperature = ref(0)

const toForecastPage = () => {
  router.push({
    name: 'weather',
    params: { adcode: props.adcode },
    query: { search: props.areaName },
  })
}

onMounted(async () => {
  try {
    ;({ temperature: temperature.value } = await getWeather(props.adcode).then(res => res.lives[0]))
  } catch (error) {
    console.error('追踪列表获取天气信息失败: ', error)
  }
})
</script>

<style lang="scss" scoped>
.saved-item {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  .item-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: rgb(0 78 113 / 1);
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition-duration: 0.3s;
    cursor: pointer;
    &.hover {
      margin-right: 2rem;
    }
  }
  .item-operation {
    display: flex;
    gap: 0.5rem;
    margin-right: -168px;
    margin-bottom: 1rem;
    transition-duration: 0.3s;
    opacity: 0;
    button {
      width: 80px;
      background-color: rgb(234 179 8 / 1);
      border: none;
      font-size: 1rem;
      color: rgb(255 255 255 /1);
      text-align: center;
      border-radius: 0.25rem;
      cursor: pointer;
    }
    &.hover {
      opacity: 1;
      margin-right: 0;
    }
  }
}
</style>
