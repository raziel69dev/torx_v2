<template>
  <div class="packs-grid row">
    <h2>
      Комплектации
    </h2>


    <drill-pack-card :drill-pack="drillPack" v-for="drillPack of drillsArray">

    </drill-pack-card>
  </div>
</template>

<script setup>
import DrillPackCard from "@/components/Layout/DrillPackCard.vue";
import {drillsPacks} from "@/Stores/drills.js";
import {watch} from "vue";

const props = defineProps({
  model: null
})

let drillsArray = []

watch(() => props.model, () => {
  drillsArray = []
  if (props.model) {
    for (let packModel of props.model) {
      drillsArray.push(drillsPacks.find(pack => pack.sku === packModel))
    }
  } else {
    drillsArray = drillsPacks
  }
}, { immediate: true });
</script>

<style scoped lang="scss">
.packs-grid {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-top: 40px;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  h2 {
    width: 100%;
    text-align: center;
  }
}

@media screen and (max-width: 1300px) {
  .packs-grid {
    justify-content: space-around;
  }
}
</style>
