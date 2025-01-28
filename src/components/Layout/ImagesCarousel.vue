<template>
  <div class="photos-carousel">
    <Carousel v-bind="carouselConfig" v-if="module.isLoaded" @init="handleInit">
      <Slide v-for="slide of props.images" :key="slide">
        <div class="carousel__item">
          <img :src="slide" alt="">
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <div v-else>
      LOADING
    </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {reactive} from "vue";

const props = defineProps(['images'])
const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true
}
const module = reactive({
  isLoaded: false
})
const handleInit = () => {
  module.isLoaded = true
  console.log(module.isLoaded)
}
handleInit()
</script>

<style scoped lang="scss">
.photos-carousel {
  position: relative;
}
.carousel__item {
  width: 100%;

  img {
    width: 100%;
  }

}

</style>
