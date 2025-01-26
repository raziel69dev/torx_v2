<template>
  <div class="compare row">
    <h2>

    </h2>
    <div class="drills-grid">
      <drills-compare-card v-for="drill of drills" :key="drill.name" :drill="drill">

      </drills-compare-card>
    </div>
  </div>
</template>

<script setup>

import DrillsCompareCard from "@/components/Layout/DrillsCompareCard.vue";
import {drills} from "@/Stores/drills.js";

</script>

<style scoped lang="scss">
.compare {
  margin-top: 60px;
  box-sizing: border-box;
  padding-top: 40px;
  padding-bottom: 40px;

  .drills-grid {
    display: flex;
    justify-content: center;
    gap: 50px;
  }
}
@media screen and (max-width: 992px) {
  .compare {
    overflow: scroll auto;

    .drills-grid {
      width: 1200px;
      flex-direction: row;
    }
  }
}

@media screen and (max-width: 576px) {

}

</style>
