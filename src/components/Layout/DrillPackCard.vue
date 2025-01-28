<template>
  <div class="drill-pack">
    <div class="image">

      <img :src="props.drillPack.photos[0]" alt="">
    </div>
    <div class="content">
      <div class="new">
        новинки
      </div>
      <h2>
        {{ props.drillPack.name }}
      </h2>
      <p>
        {{ props.drillPack.description }}
      </p>
      <div class="buttons">
        <button-red @click="addToCart(props.drillPack)">
          Купить
        </button-red>
        <button-white @click="router.push('/packs/' + props.drillPack.name)">
          О комплектации
        </button-white>
      </div>
    </div>
  </div>
</template>

<script setup>

import ButtonRed from "@/components/Layout/Buttons/ButtonRed.vue";
import ButtonWhite from "@/components/Layout/Buttons/ButtonWhite.vue";
import {useRouter} from "vue-router";
import {addToCart} from "@/Stores/userCart.js";
const router = useRouter()
const props = defineProps(['drillPack'])

</script>

<style scoped lang="scss">
.drill-pack {
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  align-items: center;

  h2 {
    margin-top: 10px;
  }
  .image {
    width: 50%;
    img {
      width: 100%;
    }
  }
  .content {
    width: 50%;
  }

  .buttons {
    margin-top: 30px;
    display: flex;
    gap: 10px;
    justify-content: start;
    margin-bottom: 50px;
  }

  .new {
    border-radius: 40px;
    background: var(--Modern, linear-gradient(135deg, #F80000 0%, #642424 100%));
    display: flex;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    font-family: "Gotham Pro";
    gap: 10px;
    color: #F2F2F2;
    margin-bottom: 20px;
    width: fit-content;
  }
}
@media screen and (max-width: 1340px) {
  .drill-pack{
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    max-width: 500px;
    .content, .image {
      width: 100%;
      justify-content: center;
      display: flex;
      flex-direction: column;

      .new {
        margin: 0 auto;
      }

      .buttons {
        width: 100%;
        justify-content: center;
      }
    }
  }
}
@media screen and (max-width: 1150px) {
  .drill-pack {max-width: 400px}
}

</style>
