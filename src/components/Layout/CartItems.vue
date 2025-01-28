<template>
  <div class="items-grid">
    <h3 style="width: 100%;">Состав заказа</h3>
    <template v-if="userCart.cart.length > 0">
      <cart-items-item v-for="item of userCart.cart" :item="item" />
    </template>
    <template v-else>
      <div class="content">
        <h2>Корзина пуста</h2>
        <button-red @click="router.push('/drill')">Посмотреть модели</button-red>
      </div>
    </template>
  </div>
</template>
<script setup>

import CartItemsItem from "@/components/Layout/CartItemsItem.vue";
import {userCart} from "@/Stores/userCart.js";
import ButtonRed from "@/components/Layout/Buttons/ButtonRed.vue";
import {useRouter} from "vue-router";
const router = useRouter()
</script>
<style scoped lang="scss">
.items-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.content {
  display: flex;
  flex-direction: column;
}
</style>
