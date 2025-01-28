<template>
  <div class="thank-you">
    <h2>
      Спасибо за заказ
    </h2>
    <p>
      Наши менеджеры свяжутся с вами в ближайшее время
    </p>
    <div class="buttons">
      <button-red @click="router.push('/#models')">
        Купить еще
      </button-red>
      <button-white @click="emits('close')">
        Закрыть окно
      </button-white>
    </div>
  </div>
</template>

<script setup>

import ButtonRed from "@/components/Layout/Buttons/ButtonRed.vue";
import ButtonWhite from "@/components/Layout/Buttons/ButtonWhite.vue";
import {useRouter} from "vue-router";

const emits = defineEmits(['close'])
const router = useRouter()
</script>

<style scoped>
.thank-you {
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
}
h3 {
  margin-bottom: 10px;
}
p {
  margin-bottom: 30px;
}
.buttons {
  justify-content: center;
  display: flex;
  gap: 30px;
}
</style>
