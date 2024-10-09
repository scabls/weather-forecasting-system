<template>
  <article class="forecast" v-if="casts.length">
    <section class="text-forecast">
      <div class="daily-detail" v-for="cast in casts" :key="cast.date">
        <span>{{ formatAayOfWeek(cast.date) }}</span>
        <span>{{ cast.date.slice(5) }}</span>
        <span>{{ cast.dayweather }}</span>
        <span>风力 {{ cast.daypower }}级</span>
      </div>
    </section>
    <section class="chart-forecast">
      <v-chart :option="option" />
    </section>
  </article>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { formatAayOfWeek } from '@/utils'
const props = defineProps({
  casts: {
    type: Array,
    requiried: true,
  },
})

const dayTemps = computed(() => props.casts.map(cast => cast.daytemp))
const nightTemps = computed(() => props.casts.map(cast => cast.nighttemp))

const option = ref({})

const renderChart = (dayTemps, nightTemps) => {
  option.value = {
    xAxis: {
      show: false,
      type: 'category',
      boundaryGap: false,
    },
    yAxis: {
      show: false,
      type: 'value',
    },
    grid: {
      top: 10,
      bottom: 20,
    },
    series: [
      {
        name: '白天气温',
        type: 'line',
        data: dayTemps,
        label: {
          show: true,
          position: 'top',
          formatter: '白{c}°C',
          color: 'white',
        },
      },
      {
        name: '夜晚气温',
        type: 'line',
        data: nightTemps,
        label: {
          show: true,
          position: 'bottom',
          formatter: '晚{c}°C',
          color: 'white',
        },
      },
    ],
  }
}

watchEffect(() => renderChart(dayTemps.value, nightTemps.value))
</script>

<style lang="scss" scoped>
.forecast {
  background-color: rgb(0 78 113 / 1);
  margin-top: 0.5rem;
  padding: 2.5rem 3rem 0;
  border-radius: 0.25rem;
  .text-forecast {
    display: flex;
    gap: 1.5rem;
    .daily-detail {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
  .chart-forecast {
    height: 10rem;
    margin-top: 2.5rem;
  }
}
</style>
