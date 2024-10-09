<template>
  <main class="container">
    <article class="search">
      <input type="text" placeholder="请输入城市名称" />
      <ul class="result-list" v-show="false">
        <li v-show="false">对不起网络似乎除了点问题 请稍后再查询</li>
        <li v-show="false">似乎没有找到你查找的城市</li>
        <li class="result-item" v-if="false">濮阳市</li>
      </ul>
    </article>
    <h2 class="empty-message" v-if="false">
      <!-- class="saved-list move-down" -->
      暂时没有保存过城市天气信息，请查询后点击右上角"+"号保存。
    </h2>
    <article class="saved-list" v-if="true">
      <!-- class="saved-list move-down" -->
      <section class="saved-item" @mouseover="showOperation" @mouseout="isShow = false">
        <!-- class="saved-item hover"  -->
        <aside class="item-info" :class="{ hover: isShow }">
          <span>濮阳市</span>
          <span>20度</span>
        </aside>
        <aside class="item-operation" :class="{ hover: isShow }">
          <button>查看</button>
          <button>删除</button>
        </aside>
      </section>
    </article>
    <h2 class="forecast-title">近期天气</h2>
    <LocalForecast />
  </main>
</template>

<script setup>
import LocalForecast from '@/components/LocalForecast.vue'
import { ref } from 'vue'
const isShow = ref(false)
const showOperation = () => (isShow.value = true)
</script>

<style lang="scss" scoped>
.container {
  color: rgb(255 255 255 /1);
  .search {
    position: relative;
    margin-bottom: 2rem;
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
  .empty-message {
    text-align: center;
    transition-duration: 0.2s;
    &.move-down {
      margin-top: 5rem;
    }
  }
  .saved-list {
    max-height: 300px;
    margin-top: 2.5rem;
    --scrollbar-thumb-hover: #93c5fd;
    scrollbar-width: thin;
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
    &.move-down {
      margin-top: 5rem;
    }
  }
  .forecast-title {
    margin-top: 1.5rem;
  }
}
</style>
