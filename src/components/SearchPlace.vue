<template>
  <article class="search">
    <input type="text" placeholder="请输入城市名称" v-model.trim="keyword" />
    <ul class="result-list" v-show="isInputing">
      <li v-show="false">对不起网络似乎除了点问题 请稍后再查询</li>
      <li v-show="searchResponse.status === '0'">似乎没有找到你查找的城市</li>
      <li class="result-item" v-if="searchResponse.status === '1'" @click="toForecastPage">
        {{ areaName }}
      </li>
    </ul>
  </article>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useWeatherStore } from '@/stores/weather'
import { getAdcode } from '@/api/weather'
import { getAreaName } from '@/utils'

const isInputing = defineModel()

const keyword = ref('')
const searchResponse = ref({})
const areaName = ref('')
const adcode = ref('')

const router = useRouter()

const toForecastPage = () => {
  router.push({
    name: 'weather',
    params: { adcode: adcode.value },
    query: { search: areaName.value },
  })
}

watch(keyword, async () => {
  if (!keyword.value.length) {
    isInputing.value = false
    searchResponse.value = {}
    return
  }
  isInputing.value = true
  searchResponse.value = await getAdcode(keyword.value)
  if (searchResponse.value.status === '0') return
  const {
    geocodes: [geocode],
  } = searchResponse.value
  areaName.value = getAreaName(geocode)
  adcode.value = geocode.adcode
})
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  margin-bottom: 2.5rem;
  padding-top: 1rem;
  input {
    width: 100%;
    background-color: transparent;
    padding: 0.5rem 0.25rem;
    border: none;
    border-bottom: 1px solid #e5e7eb;
    color: rgb(255 255 255 /1);
    font-size: 1rem;
    line-height: inherit;
    &:focus {
      border-color: rgb(0 78 113 /1);
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
  }
  .result-list {
    position: absolute;
    top: 62px;
    width: 100%;
    background-color: rgb(0 78 113 / 1);
    padding: 0.5rem 0.25rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    .result-item {
      padding: 0.5rem 0;
    }
  }
}
</style>
