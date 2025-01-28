<template>
  <div class="fluid">
    <div class="row special">
      <div class="content">
        <h3>
          Специальное предложение
        </h3>
        <h2>
          Скидка 10% на все позиции
        </h2>

        <p>
          Скидки суммируются со скидкой клиента, а также в расчете учитывается дополнительная скидка 5% за 100% предоплату
          и максимальная индивидуальная скидка!
        </p>
        <div class="buttons">
          <button-red @click="router.push('/#models')">
            Посмотреть товары
          </button-red>
        </div>
      </div>
      <div class="image">
        <div class="special-text">
          SPECIAL
        </div>
        <img :src="special" alt="">
      </div>
    </div>
  </div>
</template>
<script setup>
import special from '@/assets/images/Special.webp'
import ButtonRed from "@/components/Layout/Buttons/ButtonRed.vue";
import {useRouter} from "vue-router";

const router = useRouter()
</script>
<style scoped lang="scss">
.special {
  background-color: #474A51;
  padding: 0;
  box-sizing: border-box;
  margin-top: 100px;
  margin-bottom: 50px;
  padding-left: 40px;
  border-radius: 40px;
  background: var(--DarkNight, linear-gradient(45deg, #474A51 0%, #1C1C1C 100%));
  color: #f1f1f1;
  align-items: center;
  display: flex;
  border: 2px solid #f1f1f1;
  overflow: hidden;
  justify-content: space-between;
  box-shadow: rgba(100, 100, 100, 0.2) 0px 20px 25px -5px, rgba(100, 100, 100, 0.1) 0px 10px 10px -5px;

  .content {
    width: 45%;
    p {
      margin-bottom: 30px;
    }
    h3 {
      margin-bottom: 40px;
    }
  }

  .image {
    width: 45%;
    height: 100%;
    position: relative;
    aspect-ratio: 1 / 1;

    img {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
}
.special-text {
  font-size: 150px;
  font-weight: 900;
  position: absolute;
  top: 70px;
  left: 50%;
  translate: -50% 0;
  rotate: -20grad;
  z-index: 0;
  background: var(--Modern, linear-gradient(135deg, #F80000 0%, #642424 100%));
  opacity: 1;
  filter: blur(2px);
  color: transparent;
  background-clip: text;
}
@media screen and (max-width: 992px) {
  .special-text {
    font-size: 100px;
  }
  .fluid {
    padding: 20px;
  }
  .special {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-right: 20px;
    padding-left: 20px;

    .content, .image  {
      text-align: center;
      width: 100%;

      display: flex;
      flex-direction: column;

      .buttons {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
