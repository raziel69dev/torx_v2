<template>
  <div class="cart-item">
    <div class="item-image">
      <img :src="props.item.photos[0]">
    </div>
    <div class="item-content">
      <div class="item-name">{{ props.item.name }}</div>
      <div class="item-description">{{ props.item.description }}</div>
      <div class="count">
        <button-red @click="decreaseCount()">
          -
        </button-red>
        {{ props.item.count }}
        <button-red @click="increaseCount()">
          +
        </button-red>
      </div>
    </div>
  </div>
</template>
<script setup>
import ButtonRed from "@/components/Layout/Buttons/ButtonRed.vue";
import {userCart} from "@/Stores/userCart.js";

const props = defineProps(['item'])

const increaseCount = () => {
  props.item.count++;
  localStorage.setItem('userCart', JSON.stringify(userCart.cart))
}

const decreaseCount = () => {
  props.item.count--
  localStorage.setItem('userCart', JSON.stringify(userCart.cart))
}
</script>
<style scoped lang="scss">
.cart-item {
  display: flex;
  gap: 20px;
  max-width: 460px;
  width: 100%;

  .count {
    display: flex;
    gap: 30px;
    align-items: center;
    color: var(--SmokeGray, #DCDCDC);
    font-family: "Gotham Pro";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .item-image {
    width: 40%;
    img {
      width: 100%;
    }
  }
  .item-content {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .item-name {
    color: var(--SmokeGray, #DCDCDC);
    font-family: "Gotham Pro";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 115.385% */
  }
  .item-description {
    color: var(--SmokeGray, #DCDCDC);

    /* TORX P.DEFAULT */
    font-family: "Gotham Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 114.286% */
  }
}
</style>
