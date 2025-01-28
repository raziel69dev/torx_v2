<template>
  <the-breadcrumbs last-item="Корзина"/>

  <div class="user-cart row">
    <h1 style="width: 100%;">
      Ваш заказ
    </h1>

    <div class="wrapper">
      <cart-items />
      <user-form @success-step="modal.show = true" />


    </div>
    <video-box />

    <teleport to="body">
      <the-popup v-if="modal.show" @close="closeModal()">
        <thank-you @close="closeModal"/>
      </the-popup>
    </teleport>
  </div>

</template>

<script setup>

import TheHeader from "@/components/Layout/Template/TheHeader.vue";
import TheBreadcrumbs from "@/components/Layout/TheBreadcrumbs.vue";
import UserForm from "@/components/Layout/UserForm.vue";
import CartItems from "@/components/Layout/CartItems.vue";
import VideoBox from "@/components/Layout/VideoBox.vue";
import ThePopup from "@/components/Layout/Popup/ThePopup.vue";
import {reactive} from "vue";
import ThankYou from "@/components/Layout/ThankYou.vue";
import {useRouter} from "vue-router";

const modal = reactive({
  show: false
})
const router = useRouter()
const closeModal = () => {
  router.push('/')
  modal.show = false
}
</script>

<style scoped lang="scss">
.user-cart {
  flex-direction: column;
  .wrapper {
    width: 100%;
    display: flex;
    gap: 40px;
  }
}
@media screen and (max-width: 786px){
  .user-cart {
    .wrapper {
      flex-direction: column;
    }
  }
}
</style>
