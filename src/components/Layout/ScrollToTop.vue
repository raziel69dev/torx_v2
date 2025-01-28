<template>
  <div class="row" >
    <svg @click="router.push({hash: ''})" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 7L7 1L1 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  </div>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter()
</script>

<style scoped lang="scss">
.row {
  position: fixed;
  bottom: 20px;
  right: 0;
  color: #fff;
  display: flex;
  justify-content: end;
  width: 100px;

  svg {
    cursor: pointer;
    padding: 20px;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    background-color: #474A51;
    border-radius: 100px;
    path {
      stroke: rgba(220, 220, 220, 0.5);
      transition: .3s ease;
    }
  }

  &:hover {
    svg {
      path {
        stroke: rgba(220, 220, 220, 1);
      }
    }
  }
}
</style>
