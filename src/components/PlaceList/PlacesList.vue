<template>
  <div class="places-list">
    <article class="saved-list" v-if="placeList.length">
      <PlaceItem />
    </article>
    <h2 class="empty-message" v-else>暂时没有保存过城市天气信息，请查询后点击右上角"+"号保存。</h2>
  </div>
</template>

<script setup>
import PlaceItem from './PlaceItem.vue'
import { storeToRefs } from 'pinia'
import { useWeatherStore } from '@/stores/weather'
const { placeList } = storeToRefs(useWeatherStore())
</script>

<style lang="scss" scoped>
.places-list {
  transition-duration: 0.2s;
  &.move-down {
    margin-top: 5rem;
  }
  .empty-message {
    text-align: center;
  }
  .saved-list {
    max-height: 300px;
    --scrollbar-thumb-hover: #93c5fd;
    scrollbar-width: thin;
  }
}
</style>
