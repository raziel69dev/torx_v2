<template>
  <div class="hero">

    <div class="row justify-start">
      <div class="content">
        <h1>
          Уже в продаже
        </h1>
        <p class="large">
          Наши современные инструменты сочетают в себе высокую мощность, надежность и эргономику, чтобы обеспечить максимальную эффективность и комфорт в работе.
        </p>
        <div class="buttons">
          <button-red @click="router.push('/#models')">
            Посмотреть модели
          </button-red>
          <button-white @click="router.push('/#video')">
            Обзорное видео
          </button-white>
        </div>
      </div>
    </div>


    <div class="overflow-banner">
      <div class="particles">
        <img :src="particles" alt="">
      </div>
      <div class="man">
        <img :src="man" alt="">
      </div>
      <div class="ai-label">
        <img :src="ai" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonRed from "@/components/Layout/Buttons/ButtonRed.vue";
import ButtonWhite from "@/components/Layout/Buttons/ButtonWhite.vue";

import man from '@/assets/images/torx_man.webp'
import ai from '@/assets/images/torx_ai.webp'
import particles from '@/assets/images/torx_particles.webp'
import {useRouter} from "vue-router";


const router = useRouter()
</script>

<style scoped lang="scss">
.hero {
  min-height: 730px;
  align-items: center;
  display: flex;
  flex-basis: border-box;
  flex-direction: column;
  position: relative;
  background: var(--DarkNight, linear-gradient(45deg, #1C1C1C 0%, #474A51 100%));
  margin-top: -90px;
  padding-top: 90px;
  z-index: 1;
  width: 100%;
  overflow: hidden;

  .content {
    position: relative;
    translate: 0 100%;
    flex-wrap: wrap;
    display: flex;
    gap: 20px;
    width: 55%;
    height: 100%;
    align-items: center;
    z-index: 5;

    .buttons {
      display: flex;
      gap: 30px;
    }
  }

  .overflow-banner {
    position: absolute;
    width: 100%;
    height: 100%;

    .particles {
      position: absolute;
      bottom: -100px;
      mix-blend-mode: lighten;
      z-index: 1;
      img {
        width: 100%;
      }
    }
    .man {
      position: absolute;
      right: -50px;
      z-index: 3;
      width: 50%;
      top: 0;
      img {
        width: 100%;
      }

    }
    .ai-label {
      position: absolute;
      right: 12%;
      bottom: 45%;
      z-index: 2;
      width: 25%;

      img {
        width: 100%;
      }
    }
  }

}


@media screen and (max-width: 1140px) {
  .hero {

    .overflow-banner {
      .man {
        width: 60%;
        bottom: -20%;
        top: auto;
      }
      .ai-label {
        bottom: 20%;
        width: 50%;
        right: 20%;
      }
      .particles {
        bottom: -20px;
      }

    }
  }
}

@media screen and (max-width: 992px) {
  .hero {
    padding-top: 0;
    min-height: 80vh;

    .content {
      width: 100%;
    }
    .overflow-banner {
      .man {
        top: 30%;
        width: 80%;
      }
      .ai-label {
        bottom: 20%;
        width: 50%;
        right: 20%;
      }
      .particles {
        bottom: -20px;
      }

    }
  }
}

@media screen and (max-width: 768px) {
  .hero {
    .content {
       translate: 0 50%;
     }
    .overflow-banner {
      .man {
        top: 35%;
        width: 100%;
      }
      .ai-label {
        bottom: 40%;
        width: 50%;
        right: 20%;
      }
      .particles {
        bottom: -20px;
      }

    }
  }
}

@media screen and (max-width: 576px) {
  .hero {
    min-height: 90vh;

    .content {
      translate: 0 50%;
    }
    .overflow-banner {
      .man {
        top: 50%;
        width: 100%;
      }
      .ai-label {
        bottom: 20%;
        width: 50%;
        right: 20%;
      }
      .particles {
        bottom: -20px;
      }

    }
  }
}
</style>
