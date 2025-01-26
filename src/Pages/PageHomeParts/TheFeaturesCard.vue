<template>
  <div class="feature-card">
    <div class="icon">
      <inline-svg
        :src="icon"
        width="25"
        height="25"
        aria-label="My image"
      ></inline-svg>
    </div>
    <div class="text">
      <div class="headline">
        <slot name="headline"></slot>
      </div>
      <div class="description">
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import InlineSvg from 'vue-inline-svg';

const props = defineProps({
  icon: String
})
</script>

<style scoped lang="scss">

.feature-card {
  display: flex;
  padding: 30px 15px;
  justify-content: space-between;
  align-items: start;
  flex-shrink: 0;
  border-radius: 40px;
  max-width: 340px;
  width: 100%;
  align-self: stretch;
  border: 1px solid var(--GraphiteGray, #474A51);
  background: var(--GraphiteBlack, #1C1C1C);
  gap: 20px;

  .text {

    .headline  {
      color: var(--SmokeGray, #DCDCDC);
      font-family: "Gotham Pro";
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px; /* 110% */
      margin-bottom: 10px;
    }
    .description {
      color: var(--SmokeGray, #DCDCDC);
      font-family: "Gotham Pro";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 114.286% */
    }
  }
  .icon {
    width: 50px;
    height: 50px;
    gap: 10px;
    flex-shrink: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background: var(--GraphiteGray, #474A51);
  }
}

</style>
