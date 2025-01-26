<template>
  <div class="ptech-platform row">
    <div class="content">
      <inline-svg :src="ptech"  width="300" height="80"  aria-label="My image"  />
      <p>
        Скоро нас ждет расширение линейки и единая аккумуляторная система PTECH PLATFORM — бытовой и садовый аккумуляторный инструмент под брендами TORX и POLYAGRO.
      </p>
    </div>
    <div class="image">
      <img :src="ptechPlatform" alt="">
    </div>
  </div>
</template>

<script setup>
import ptech from '@/assets/logos/ptech.svg'
import ptechPlatform from '@/assets/images/ptech_platform.webp'
import InlineSvg from "vue-inline-svg";

</script>

<style scoped lang="scss">
.ptech-platform {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 40px;

  .content, .image {
    width: 50%;
    img {
      width: 100%;
    }
    p {
      margin-top: 50px;
    }
  }
}


@media screen and (max-width: 992px) {
  .ptech-platform {
    flex-wrap: wrap;
    .content, .image {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
