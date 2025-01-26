<template>
  <div class="fluid">
    <Carousel v-bind="carouselConfig" :autoplay="2000">
      <Slide v-for="tag of tags" :key="tag">
        <the-tag>#{{ tag }}</the-tag>
      </Slide>
    </Carousel>
  </div>
</template>
<script setup>
import TheTag from '@/components/Layout/Tags/TheTag.vue'
import { ref } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 5,
  wrapAround: true,
  breakpointMode: 'carousel',
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 1.5,
      snapAlign: 'center',
    },
    // 400px and up
    768: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    // 500px and up
    1140: {
      itemsToShow: 5,
      snapAlign: 'center',
    },

    1280: {
      itemsToShow: 6,
      snapAlign: 'center',
    },
  }
}

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
  'современность',
  'доступность',
  'эксклюзивность',
  'твой_друг',
])
</script>
<style lang="scss" scoped>

.fluid {
  padding-top: 35px;
  padding-bottom: 35px;
  box-sizing: border-box;
}

</style>
