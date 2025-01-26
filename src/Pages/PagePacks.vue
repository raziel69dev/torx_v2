<template>
  <the-header />
  <main>
    <the-breadcrumbs lastItem="Комплектации" />
    <drills-packs style="margin-top: 0;" />
    <video-box />
  </main>
</template>

<script setup>
import TheHeader from "@/components/Layout/Template/TheHeader.vue";
import TheBreadcrumbs from "@/components/Layout/TheBreadcrumbs.vue";
import VideoBox from "@/components/Layout/VideoBox.vue";
import DrillsPacks from "@/components/Layout/DrillsPacks.vue";
</script>

<style scoped lang="scss">

</style>
