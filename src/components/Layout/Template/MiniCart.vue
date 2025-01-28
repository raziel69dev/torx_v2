<template>
  <div class="mini-cart">
    <div class="dropdown-toggle" @click="router.push('/cart')">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
        <path d="M1 0.5H2.31348C2.56088 0.5 2.68458 0.5 2.78413 0.54524C2.87185 0.585108 2.94619 0.649225 2.99829 0.729945C3.0574 0.821543 3.07489 0.94332 3.10988 1.18686L3.58584 4.5M3.58584 4.5L4.64362 12.2314C4.77786 13.2125 4.84498 13.7031 5.08084 14.0723C5.28868 14.3977 5.58664 14.6564 5.93888 14.8174C6.33861 15 6.83647 15 7.83218 15H16.438C17.3859 15 17.8598 15 18.2471 14.8304C18.5886 14.6809 18.8815 14.4398 19.0931 14.1342C19.3331 13.7876 19.4218 13.3247 19.5991 12.3988L20.9302 5.44969C20.9926 5.12381 21.0238 4.96087 20.9786 4.8335C20.9389 4.72177 20.8606 4.62768 20.7576 4.56802C20.6403 4.5 20.4735 4.5 20.1399 4.5H3.58584ZM9.04483 19.5C9.04483 20.0523 8.59461 20.5 8.03923 20.5C7.48385 20.5 7.03362 20.0523 7.03362 19.5C7.03362 18.9477 7.48385 18.5 8.03923 18.5C8.59461 18.5 9.04483 18.9477 9.04483 19.5ZM17.0897 19.5C17.0897 20.0523 16.6394 20.5 16.0841 20.5C15.5287 20.5 15.0785 20.0523 15.0785 19.5C15.0785 18.9477 15.5287 18.5 16.0841 18.5C16.6394 18.5 17.0897 18.9477 17.0897 19.5Z" stroke="#DCDCDC" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="counter">
      {{ counter.cartCount }}
    </span>
    </div>
  </div>
</template>

<script setup>

import {counter, userCart} from "@/Stores/userCart.js";
import {useRouter} from "vue-router";

const router = useRouter()

</script>

<style scoped lang="scss">
.mini-cart {
  position: relative;

  .dropdown-toggle {
    position: relative;
    cursor: pointer;

    .counter {
      color: #f1f1f1;
      font-family: "Gotham Pro";
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      font-size: 10px;
      padding: 3px;
      background-color: #F80000;
      border-radius: 20px;
      position: absolute;
      z-index: 2;
      right: -10px;
      top: -10px;
    }
  }


}
</style>
