<template>
  <div class="tagline">
    <slot />
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.tagline {
  color: var(--SmokeLight, #f2f2f2);
  font-family: 'Gotham Pro';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: lowercase;
  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  background: #474a51;
  border-radius: 30px;
  width: 220px;
}
</style>
