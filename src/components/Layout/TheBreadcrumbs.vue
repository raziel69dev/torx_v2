<template>
  <div class="breadcrumbs row">
    <router-link to="/">
      Главная
    </router-link>
    <div class="sep" v-if="Object.keys(router.currentRoute.value.meta).length > 0">/</div>
    <router-link v-if="Object.keys(router.currentRoute.value.meta).length > 0" :to="router.currentRoute.value.meta.to">
      {{ router.currentRoute.value.meta.breadcrumb }}
    </router-link>
    <div class="sep">/</div>
    <div>
      {{ props.lastItem }}
    </div>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter()

const props = defineProps(['lastItem'])
</script>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  margin-top: 10px;
  gap: 10px;
  a, .sep {
    color: var(--GraphiteGray, #474A51);
    text-align: center;
    font-family: "Gotham Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  div {
    color: var(--SmokeLight, #F2F2F2);
    text-align: left;
    font-family: "Gotham Pro";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

}
</style>
