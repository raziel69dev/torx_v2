<template>
  <div class="breadcrumbs row">
    <div class="items">
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
    <button-white @click="router.back()">
      Назад
    </button-white>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";
import ButtonWhite from "@/components/Layout/Buttons/ButtonWhite.vue";

const router = useRouter()

const props = defineProps(['lastItem'])
</script>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  margin-top: 10px;
  gap: 10px;
  justify-content: space-between;
  align-items: center;

  .items {
    display: flex;
    gap: 10px;
  }
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
