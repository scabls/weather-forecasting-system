<template>
  <div class="places-list">
    <h2 class="empty-message" v-if="false">
      暂时没有保存过城市天气信息，请查询后点击右上角"+"号保存。
    </h2>
    <article class="saved-list" v-else>
      <section class="saved-item" @mouseover="isShow = true" @mouseout="isShow = false">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isShow = ref(false)
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
  }
}
</style>
