<template>
  <div class="drill-card">
    <div class="image">
      <img :src="props.drill.photos[0]" alt="">
    </div>
    <div class="info">
      <div class="new">
        <span>{{ props.drill.badge }}</span>
      </div>
      <h2>
        {{ props.drill.name }}
      </h2>
      <p>
        {{ props.drill.description }}
      </p>
    </div>
    <div class="buttons">
      <button-red @click="addToCart(props.drill)">
        Купить
      </button-red>
      <button-white @click="router.push('/drill/' + props.drill.name)">
        О модели
      </button-white>
    </div>
    <div class="badges">
      <div class="badge voltage">
        <div class="icon">{{ props.drill.voltage }}</div>
        <div class="description">Серия шуруповерта</div>
      </div>
      <div class="badge">
        <div class="icon"><inline-svg :src="spinIcon"  width="40" height="40"  aria-label="My image" ></inline-svg></div>
        <div class="headline">{{ props.drill.options["Крутящий момент"] }}</div>
        <div class="description">Максимальный крутящий момент</div>
      </div>
      <div class="badge">
        <div class="icon"><inline-svg :src="spinnerIcon"  width="40" height="40"  aria-label="My image" ></inline-svg></div>
        <div class="headline">{{ props.drill.options["Частота вращения"] }}</div>
        <div class="description">Максимальное количество оборотов в минуту</div>
      </div>
      <div class="badge">
        <div class="icon"><inline-svg :src="speedIcon"  width="40" height="40"  aria-label="My image" ></inline-svg></div>
        <div class="headline">{{ props.drill.options["Ступеней крутящего момента"] }}</div>
        <div class="description">Ступеней крутящего момента</div>
      </div>
      <div class="badge" :class="{opacity: !props.drill.packs}">
        <div class="icon"><inline-svg :src="caseIcon"  width="40" height="40"  aria-label="My image" ></inline-svg></div>
        <div class="headline">кейс</div>
        <div class="description">
          <span v-if="props.drill.packs">
            {{ props.drill.packs.length }} доп. комплектаци<span v-if="props.drill.packs.length === 1">я</span><span v-if="props.drill.packs.length > 1">й</span>
          </span>
          <span v-else>нет дополнительных комплектаций</span>
        </div>
      </div>
      <button-black v-if="props.drill.packs" @click="router.push('/pack')">
        посмотреть комплектации
      </button-black>
    </div>
  </div>
</template>

<script setup>
import ButtonRed from "@/components/Layout/Buttons/ButtonRed.vue";
import ButtonWhite from "@/components/Layout/Buttons/ButtonWhite.vue";
import spinIcon from '@/assets/icons/spin.svg'
import spinnerIcon from '@/assets/icons/spinmin.svg'
import speedIcon from '@/assets/icons/speed.svg'
import caseIcon from '@/assets/icons/case.svg'

import InlineSvg from "vue-inline-svg";
import ButtonBlack from "@/components/Layout/Buttons/ButtonBlack.vue";
import {useRouter} from "vue-router";
import {addToCart} from "@/Stores/userCart.js";

const props = defineProps(['drill'])

const router = useRouter()


</script>

<style scoped lang="scss">
.drill-card {
  width: 33%;
  .image {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    img {
      max-width: 300px;
      width: 100%;
    }
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 10px;
    justify-content: center;

    h2, p, .new {
      margin: 0 auto;
      text-align: center;
    }
    p {
      margin-bottom: 20px;
    }
  }
  .buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
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
    width: fit-content;
  }
  .badges {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    .badge {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      &.opacity {
        opacity: .6;
      }

      &.voltage {
        .icon {
          display: flex;
          width: 80px;
          height: 80px;
          padding: 20px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 15px;
          flex-shrink: 0;
          border-radius: 25px;
          background: var(--Modern, linear-gradient(135deg, #F80000 0%, #642424 100%));
          color: var(--SmokeGray, #DCDCDC);
          text-align: center;
          font-family: "Gotham Pro";
          font-size: 36px;
          box-sizing: border-box;
          font-style: normal;
          font-weight: 700;
          line-height: 80px; /* 222.222% */

        }
      }

      .headline {
        color: var(--SmokeGray, #DCDCDC);
        text-align: center;
        font-family: "Gotham Pro";
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .icon {
        display: flex;
        justify-content: center;
      }
      .description {
        color: var(--SmokeGray, #DCDCDC);
        text-align: center;
        font-family: "Gotham Pro";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}
@media screen and (max-width: 992px) {

  .drill-card {
    max-width: 200px;
    .image img {
      width: 190px;
      height: 190px;
    }
  }
}
</style>
