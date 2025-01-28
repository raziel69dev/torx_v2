<template>
  <main>
    <the-breadcrumbs :lastItem="drill.name" />
    <drill-photos :drill="drill.model" @scroll-to="emit => scrollToItem(emit)"/>
    <drill-about :drill="drill.model"  />

    <drills-packs id="packs" v-if="drill.model.packs" :model="drill.model.packs" />
    <video-box id="videoBox"></video-box>
  </main>
</template>

<script setup>

import TheHeader from "@/components/Layout/Template/TheHeader.vue";
import TheBreadcrumbs from "@/components/Layout/TheBreadcrumbs.vue";
import {reactive, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import DrillPhotos from "@/Pages/PageDrillsParts/DrillPhotos.vue";
import {drills} from "@/Stores/drills.js";
import DrillsPacks from "@/components/Layout/DrillsPacks.vue";
import VideoBox from "@/components/Layout/VideoBox.vue";
import DrillAbout from "@/Pages/PageDrillsParts/DrillAbout.vue";

const route = useRoute()
const router = useRouter()

const drill = reactive({
  name: route.params.name.toUpperCase(),
  model: drills.find(drill => drill.name === route.params.name.toUpperCase())
})

const videoBox = ref(null)

const scrollToItem = (item) => {
  document.getElementById(item).scrollIntoView({ behavior: "smooth", block: 'start' })
}

watch(() => route.path, () => {
  drill.model = drills.find(drill => drill.name === route.params.name.toUpperCase())
}, { immediate: true });
</script>

