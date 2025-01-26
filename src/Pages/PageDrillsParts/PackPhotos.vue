<template>
    <div class="model-photos row">
      <div class="photos">
        <div class="mini">
          <img :src="photo"
               v-for="(photo, index) of model.photos" alt=""
               @click="setPhoto(index)"
               :class="{selected: photos.selected === photo}">
        </div>
        <div class="selected">
          <img :src="photos.selected" alt="">
        </div>
      </div>

      <div class="content">
        <div class="new">
          новинка
        </div>
        <h1>
          {{ model.name }}
        </h1>
        <ul>
          <li v-for="item of model.options">{{ item }}</li>
        </ul>

        <div class="buttons">
          <button-red>
            Купить
          </button-red>
          <button-white @click="emits('scrollTo', 'video')">
            Обзорное видео
          </button-white>
        </div>
      </div>
    </div>
</template>
<script setup>
import {onMounted, reactive, watch} from "vue";
import {useRoute} from "vue-router";
import ButtonRed from "@/components/Layout/Buttons/ButtonRed.vue";
import ButtonWhite from "@/components/Layout/Buttons/ButtonWhite.vue";

const props = defineProps(['model'])

const emits = defineEmits(['scrollTo'])

const photos = reactive({
  allPhotos: props.model.photos,
  selected: null,
})

const setPhoto = (index) => {
  photos.selected = props.model.photos[index]
  console.log(photos)
}

onMounted(() => {
  setPhoto(0)
})

const route = useRoute()

watch(() => props.model, () => {
  photos.selected = props.model.photos[0]
}, { immediate: true });

</script>
<style lang="scss" scoped>
.model-photos {
  margin-top: 50px;
  gap: 50px;
  align-items: center;

  .buttons {
    display: flex;
    gap: 10px;
    margin-top: 40px;
    justify-content: start;
    margin-bottom: 50px;
  }

  .photos {
    display: flex;
    width: 40%;
    gap: 30px;
    .mini {
      width: 20%;
      display: flex;
      flex-direction: column;
      gap: 35px;
      max-height: 400px;
      overflow: hidden auto;

      img {
        border: 1px solid transparent;
        border-radius: 20px;
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
        cursor: pointer;

        &.selected {
          border-color: #474A51;
        }
      }
    }
    .selected {
      width: 80%;
      img {
        width: 100%;
      }
    }
  }

  .content {
    width: 60%;

    .badges {
      margin-top: 40px;
      display: flex;
      align-items: center;
      gap: 80px;

      .badge {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
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
}
@media screen and (max-width: 992px) {
  .model-photos {
    flex-direction: column;
    justify-content: start;

    .buttons {
      width: 100%;
      justify-content: center;
    }
    .new {
      margin: 0 auto;
    }

    .photos, .content {
      width: 100%;
      justify-content: center;
      text-align: center;
      align-items: stretch;

      .mini {
        width: 25%;
        max-height: 300px;
      }
    }
  }
}

@media screen and (max-width: 542px) {
  .model-photos .photos {
    flex-direction: column;
    .mini {
      order: 2;
      width: 100%;
      flex-wrap: nowrap;
      flex-direction: row;
      overflow: scroll hidden;

      img {
        width: 100px;
      }

    }
  }
}
</style>
