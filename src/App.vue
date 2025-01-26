<script setup>
import { RouterView } from 'vue-router'
import TheFooter from "@/components/Layout/Template/TheFooter.vue";
import {Notifications} from "@kyvg/vue3-notification";


</script>

<template>
  <RouterView />
  <the-footer />
  <notifications  classes="notice" />
</template>

<style scoped lang="scss">

</style>
