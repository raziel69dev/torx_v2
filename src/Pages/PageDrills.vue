<template>
  <main>
    <the-breadcrumbs lastItem="Модели" />
    <h2 style="width: 100%; text-align: center">Модели шуруповертов</h2>
    <drills-compare />
    <video-box />
  </main>
</template>

<script setup>
import TheHeader from "@/components/Layout/Template/TheHeader.vue";
import TheBreadcrumbs from "@/components/Layout/TheBreadcrumbs.vue";
import DrillsCompare from "@/components/Layout/DrillsCompare.vue";
import VideoBox from "@/components/Layout/VideoBox.vue";
</script>

<style scoped lang="scss">

</style>
