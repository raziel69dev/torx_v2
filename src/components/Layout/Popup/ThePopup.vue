<template>
  <div class="modal">
    <div class="modal-body">
      <slot />
    </div>
    <div class="backdrop" @mousedown="emit('close')"></div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";

const emit = defineEmits(['close'])
const closeByEsc = (e) => {
  e.key === 'Esc' ? emit('close') : null
}

onMounted(() => {
  window.addEventListener('keydown', closeByEsc)
})
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 50;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  .modal-body {
    position: fixed;
    z-index: 51;
    display: flex;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    padding: 20px 40px;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: start;
    flex-shrink: 0;
    border-radius: 40px;
    max-width: 540px;
    width: 90%;
    align-self: stretch;
    border: 1px solid var(--GraphiteGray, #474A51);
    background: var(--GraphiteBlack, #1C1C1C);
  }

  .backdrop {
    position: fixed;
    z-index: 50;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(71, 74, 81, 0.3);
    backdrop-filter: blur(3px);
  }
}
</style>
