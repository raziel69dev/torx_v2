<template>
  <div class="where-to-buy row">
    <h2>
      Где купить?
    </h2>
    <div class="logos">
      <div class="logo" v-for="logo of logos" :class="{disabled: logo.disabled}">
        <router-link :to="logo.link" v-if="logo.linkType === 'self'">
          <img :src="logo.logo" alt="">
        </router-link>

        <a :href="logo.link" :target="logo.linkType" v-else>
          <img :src="logo.logo" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import torx from '@/assets/logos/torx.webp'
import poly from '@/assets/logos/poly.webp'
import ozon from '@/assets/logos/ozon.webp'
import wb from '@/assets/logos/wb.webp'
import ym from '@/assets/logos/ym.webp'

const logos = [{
  logo: torx,
  disabled: false,
  link: "#models",
  linkType: 'self'
}, {
  logo: poly,
  disabled: false,
  link: "https://ptech.ru",
  linkType: 'blank'
}, {
  logo: ozon,
  disabled: true
}, {
  logo: wb,
  disabled: true
}, {
  logo: ym,
  disabled: true
}]
</script>

<style scoped lang="scss">
.where-to-buy {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  h2 {
    width: 100%;
    text-align: center;
  }
  .logos {
    display: flex;
    justify-content: space-between;

    .logo {

      &.disabled {
        opacity: .5;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .where-to-buy {
    h2 {
      margin-bottom: 50px;
    }
    .logos {
      gap: 50px;
      align-items: center;
      flex-direction: column;

      .logo {
        a {
          width: 100%;
          height: 100%;
          display: flex;
        }
      }
    }
  }
}
</style>
