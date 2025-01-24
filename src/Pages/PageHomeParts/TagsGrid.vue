<template>
  <div class="fluid">
    <div class="tags">
      <the-tag v-for="tag of tags" :key="tag">#{{ tag }}</the-tag>
    </div>
  </div>
</template>
<script setup>
import TheTag from '@/components/Layout/Tags/TheTag.vue'
import { ref } from 'vue'
import { reactive } from 'vue'
import { onMounted } from 'vue'

let tags = ref([
  'МОЩНОСТЬ',
  'качество',
  'УДОБСТВО',
  'эффективность',
  'эргономика',
  'УНИВЕРСАЛЬНОСТЬ',
  'комфорт',
  'ДОЛГОВЕЧНОСТЬ',
  'НАДЕЖНОСТЬ',
  'точность',
])
</script>
<style lang="scss" scoped>
.tags {
  display: flex;
  gap: 50px;
  justify-content: center;
}

.tags {
  position: relative;
  white-space: nowrap;
  animation: bannermove 1s linear infinite;
}

@keyframes bannermove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-20%, 0);
  }
}
</style>
