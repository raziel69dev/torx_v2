<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup>

</script>

<style scoped lang="scss">
.btn {
  display: flex;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: transparent;
  transition: .3s ease;
  border: 1px solid #F2F2F2;
  width: fit-content;
  color: var(--SmokeGray, #DCDCDC);
  font-family: "Gotham Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: fit-content;

  &:hover {
    opacity: .8;
  }
}


@media screen and (max-width: 768px) {

  .btn {
    padding: 10px;
  }
}

@media screen and (max-width: 576px) {
  .btn {
    font-size: 14px;
  }
}
</style>
