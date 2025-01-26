<template>
  <div class="row">
    <div class="video">
      <div class="content">
        <h2>
          Смотрите обзорное видео о TORX
        </h2>
        <p>
          Видео демонстрирует подробный обзор системы TORX, раскрывая её ключевые особенности и преимущества.

          Вы узнаете об истории создания этой уникальной технологии, принципах работы и сферах применения.

          В обзоре также рассматриваются различные модели шуруповертов TORX.
        </p>
      </div>
      <video controls=""  loop="" :poster="poster"
             preload="none" ref="videoBox">
        <source  :src="video" type="video/webm">
      </video>
    </div>

  </div>
</template>

<script setup>
import poster from '@/assets/images/poster.webp'
import video from '@/assets/Ver-6.3-DrW_eB_4.webm'
import {ref} from "vue";

const videoBox = ref(null)


</script>

<style scoped lang="scss">
.video {
  margin-top: 50px;
  border-radius: 40px;
  border: 1px solid var(--GraphiteGray, #474A51);
  background: var(--GraphiteBlack, #1C1C1C);
  display: flex;
  justify-content: space-between;
  gap: 50px;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;

  .content {
    width: 50%;
  }
  video {
    width: 50%;
    border-radius: 40px;
  }
}

@media screen and (max-width: 992px) {
  .video {
    flex-wrap: wrap;
    .content, video {
      width: 100%;
      text-align: center;
    }
  }
}

@media screen and (max-width: 576px) {

}
</style>
