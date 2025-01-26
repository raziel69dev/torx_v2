<template>
  <div class="features row">
    <h2>
      Преимущества наших шуруповертов
    </h2>
    <div class="content">

      <div class="features-grid">
        <the-features-card v-for="feature of drillFeatures"
                           :icon="feature.icon"
                           :key="feature.headline">
          <template #headline>{{ feature.headline }}</template>
          <template #description>{{ feature.description }}</template>
        </the-features-card>
      </div>

    </div>
    <div class="image">
      <img :src="drill" alt="">
    </div>
  </div>
</template>

<script setup>
import TheFeaturesCard from "@/Pages/PageHomeParts/TheFeaturesCard.vue";
import {drillFeatures} from "@/Stores/drillFeatures.js";

import drill from '@/assets/images/9310212.webp'
</script>

<style scoped lang="scss">
.features {
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  h2 {
    width: 100%;
  }

  .content {
    width: 65%;

    .features-grid {
      gap: 20px;
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      align-items: center;
    }
  }
  .image {
    width: 35%;

    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1240px) {
  .features {
    .content {
      width: 40%;
    }
    .image {
      width: 60%;
    }
  }
}

@media screen and (max-width: 992px) {
  .features {
    gap: 50px;
    h2 {
      text-align: center;
    }
    .content, .image {
      width: 100%;
      justify-content: center;
      display: flex;
      .features-grid {
        width: 100%;
        justify-content: center;
      }
      img {
        width: 50%;
      }
    }
    .content {
      order: 2;
    }
    .image {
      order: 1;
    }
  }
}
</style>
