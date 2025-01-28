<script setup>
import { RouterView } from 'vue-router'
import TheFooter from "@/components/Layout/Template/TheFooter.vue";
import {Notifications} from "@kyvg/vue3-notification";
import ScrollToTop from "@/components/Layout/ScrollToTop.vue";
import {onMounted, reactive} from "vue";
import TheHeader from "@/components/Layout/Template/TheHeader.vue";


const scrollTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
}

const scroll = reactive({
  isVisible: false,
  menuSlided: false
})

onMounted(() => {
  window.addEventListener("scroll", () => {
    scroll.isVisible = scrollY > 300
    scroll.menuSlided = scrollY > 150
  })
})

</script>

<template>
  <the-header :class="{hided: scroll.menuSlided }" />
  <the-header :class="{hided: !scroll.menuSlided }" class="scrolled"/>
  <RouterView />
  <the-footer />
  <notifications  classes="notice" position="LEFT BOTTOM" />

  <scroll-to-top @click="scrollTop()" v-if="scroll.isVisible" />
</template>

<style scoped lang="scss">

.hided {
  visibility: hidden;
}
.scrolled {
  transition: .3s ease;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #1c1c1c;
}
</style>
