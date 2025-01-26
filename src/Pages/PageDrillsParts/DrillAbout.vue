<template>
    <div class="drill-about row">
      <h2>Характеристики</h2>

      <div class="drill-about-items">
        <div class="options">
          <div class="option" v-for="(option, index) of drill.options">
            <span class="index">{{ index }}</span>
            <span class="sep"></span>
            <span class="description">{{ option }}</span>
          </div>
        </div>

        <div class="cards">
          <the-features-card v-for="feature of drillsCards"
                             :icon="feature.icon"
                             :key="feature.headline">
            <template #headline>{{ feature.headline }}</template>
            <template #description>{{ feature.description }}</template>
          </the-features-card>
        </div>
      </div>
    </div>
</template>
<script setup>
import {watch} from "vue";
import {drillsCards} from "@/Stores/drills.js";
import TheFeaturesCard from "@/Pages/PageHomeParts/TheFeaturesCard.vue";

const props = defineProps(['drill'])

watch(() => props.drill, () => {

}, { immediate: true });
</script>
<style lang="scss" scoped>

.drill-about {
  margin-top: 90px;
  flex-direction: column;
  .drill-about-items {
    display: flex;
    gap: 50px;

    .options {
      width: 40%;

      .option {
        display: flex;
        justify-content: space-between;
        .index {
          color: var(--SmokeLight, #F2F2F2);
          font-family: "Gotham Pro";
          font-size: 14px;
          font-style: normal;
          display: inline-block;
          font-weight: 400;
          line-height: 36px; /* 257.143% */
          white-space: nowrap;
        }

        .sep {
          height: 1px;
          width: 100%;
          align-self: end;
          border-bottom: 1px dotted #474A51;
          margin-bottom: 10px;
        }
        .description {
          color: var(--SmokeLight, #F2F2F2);
          text-align: right;
          font-family: "Gotham Pro";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 36px; /* 257.143% */
          white-space: nowrap;
        }
      }
    }

    .cards {
      width: 60%;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: end;
    }
  }
}

@media screen and (max-width: 992px) {
  .drill-about {
    h2 {
      text-align: center;
    }
    .drill-about-items {
      flex-direction: column;
      .options {
        width: 100%;
        justify-content: center;
      }
      .cards {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
}
</style>

