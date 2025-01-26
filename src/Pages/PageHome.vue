<template>
  <the-header ></the-header>
  <div class="main">
    <hero-slider />
    <tags-grid />
    <the-features id="features" />
    <video-box id="video"/>
    <drills-compare  id="models" />
    <drills-packs  id="packs" />
    <presentation-box  id="about" />
    <where-to-buy  id="where-to-buy"/>
    <ptech-platform />
  </div>
</template>
<script setup>
import TagsGrid from '@/Pages/PageHomeParts/TagsGrid.vue'
import TheHeader from "@/components/Layout/Template/TheHeader.vue";
import HeroSlider from "@/Pages/PageHomeParts/HeroSlider.vue";
import TheFeatures from "@/Pages/PageHomeParts/TheFeatures.vue";
import VideoBox from "@/components/Layout/VideoBox.vue";
import DrillsCompare from "@/components/Layout/DrillsCompare.vue";
import DrillsPacks from "@/components/Layout/DrillsPacks.vue";
import PresentationBox from "@/components/Layout/PresentationBox.vue";
import WhereToBuy from "@/Pages/PageHomeParts/WhereToBuy.vue";
import PtechPlatform from "@/components/Layout/PtechPlatform.vue";
import {onMounted} from "vue";


onMounted(() => {

})
</script>
<style lang="scss" scoped></style>
