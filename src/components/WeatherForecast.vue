<template>
  <article class="forecast">
    <section class="text-forecast">
      <div class="daily-detail">
        <span>今天</span><span>10-08</span><span>多云</span><span>风力 1-3级</span>
      </div>
      <div class="daily-detail">
        <span>今天</span><span>10-08</span><span>多云</span><span>风力 1-3级</span>
      </div>
      <div class="daily-detail">
        <span>今天</span><span>10-08</span><span>多云</span><span>风力 1-3级</span>
      </div>
      <div class="daily-detail">
        <span>今天</span><span>10-08</span><span>多云</span><span>风力 1-3级</span>
      </div>
    </section>
    <section class="chart-forecast">
      <v-chart :option="option" />
    </section>
  </article>
</template>

<script setup>
import { ref } from 'vue'
const option = ref({
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
      name: 'Highest',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9],
      label: {
        show: true,
        position: 'top',
        formatter: '白{c}°C',
        color: 'white',
      },
    },
    {
      name: 'Lowest',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      label: {
        show: true,
        position: 'bottom',
        formatter: '晚{c}°C',
        color: 'white',
      },
    },
  ],
})
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
