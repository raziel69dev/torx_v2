<template>
  <the-header />
  <main>
    <the-breadcrumbs :lastItem="drill.name" />
    <pack-photos :model="drill.model" />

    <video-box id="videoBox"></video-box>
  </main>
</template>

<script setup>

import TheHeader from "@/components/Layout/Template/TheHeader.vue";
import TheBreadcrumbs from "@/components/Layout/TheBreadcrumbs.vue";
import {reactive, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {drills, drillsPacks} from "@/Stores/drills.js";
import VideoBox from "@/components/Layout/VideoBox.vue";
import PackPhotos from "@/Pages/PageDrillsParts/PackPhotos.vue";

const route = useRoute()
const router = useRouter()

const drill = reactive({
  name: route.params.name.toUpperCase(),
  model: drillsPacks.find(drill => drill.name === route.params.name.toUpperCase())
})

const videoBox = ref(null)

const scrollToItem = (item) => {
  document.getElementById('videoBox').scrollIntoView({ behavior: "smooth", block: 'start' })
}

watch(() => route.path, () => {
  drill.model = drillsPacks.find(drill => drill.name === route.params.name.toUpperCase())
}, { immediate: true });
</script>

