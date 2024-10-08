<template>
  <Teleport to="body">
    <dialog
      class="tips-modal"
      ref="modal"
      :class="{ 'is-active': showModal }"
      @keydown.prevent="closeModal"
    >
      <h2>关于:</h2>
      <p>这个应用可以用来追踪你选择城市的当前天气</p>
      <h2>如何使用:</h2>
      <p>
        1.点击搜索框输入你希望追踪的城市<br />
        2.在搜索结果中选中一个城市，你将获取当地最新的天气<br />
        3.点击右侧的＋号可以将追踪城市的天气情况保存在首页
      </p>
      <h2>移除城市:</h2>
      <p>如果你不想在首页关注某个城市,可以通过底部的按钮删<br />除它</p>
      <button @click="closeModal">关闭</button>
    </dialog>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'

const modal = defineModel('modal')
const showModal = defineModel('showModal')

const delay = ref(1000)

const duration = computed(() => delay.value / 1000 + 's')

const closeModal = () => {
  showModal.value = false
  setTimeout(() => modal.value.close(), delay.value)
}
</script>

<style lang="scss" scoped>
$duration: v-bind(duration);

.tips-modal {
  max-width: 768px;
  background-color: rgb(255 255 255 / 1);
  margin-top: 8rem;
  padding: 1rem;
  border: none;
  transition: opacity $duration ease;
  opacity: 0;
  &.is-active {
    opacity: 1;
  }
  &::backdrop {
    background: rgba(0, 0, 0, 0.3);
    transition: opacity $duration ease;
    opacity: 0;
  }
  &.is-active::backdrop {
    opacity: 1;
  }
  h2 {
    line-height: 1.5;
  }
  p {
    font-size: 0.75rem;
    line-height: 1rem;
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  button {
    background-color: rgb(0 102 138 / 1);
    margin-top: 2rem;
    padding: 0.5rem 1.5rem;
    border: none;
    color: rgb(255 255 255 / 1);
    font-size: 0.75rem;
    line-height: 1rem;
    outline: none;
    cursor: pointer;
  }
}
</style>
