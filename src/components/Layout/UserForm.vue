<template>
  <form @submit.prevent class="form">
    <h3 style="margin-bottom: 20px;">Оформление заказа</h3>
    <div class="col">
      <div class="input-wrapper" >
        <input
          placeholder="Ваше имя"
            type="text"
            id="name"
            v-model="input.name.data"
            :class="{ error: input.name.error }"
        />
        <span class="err" v-if="input.name.error">Введите полное имя</span>
      </div>
      <div class="input-wrapper"  >
        <input
          placeholder="Ваш город"
            type="text"
            id="name"
            v-model="input.city.data"
            :class="{ error: input.city.error }"
        />
        <span class="err" v-if="input.city.error">Введите город</span>
      </div>
      <div class="input-wrapper" >
        <input
          placeholder="Ваш телефон"
            :class="{ error: input.phone.error }"
            type="tel"
            id="tel"
            v-maska="'+7 (9##) ###-####'"
            v-model="input.phone.data"
        />
        <span class="err" v-if="input.phone.error">Не верный номер телефона</span>
      </div>
    </div>
    <div class="recaptcha">
      <vue-recaptcha
        v-show="true"
        sitekey="6Lc-W74qAAAAALbus2qD_5EDLNlg6HGEgp4TP0xv"
        size="normal"
        theme="dark"
        hl="ru"
        :loading-timeout="30000"
        @verify="input.robot.isRobot = false"
        @fail="input.robot.isRobot = true"
        @error="input.robot.isRobot = false"
      />
      <span class="err" v-if="input.robot.error">Пройдите капчу</span>

    </div>


    <button-red style="width: 100%" @click="makeMessage()">
      Оформить
    </button-red>
  </form>
</template>
<script setup>
import { vMaska } from "maska/vue";
import {useRouter} from "vue-router";
import {reactive} from "vue";
import VueRecaptcha from "vue3-recaptcha2";
import ButtonRed from "@/components/Layout/Buttons/ButtonRed.vue";
import {userCart} from "@/Stores/userCart.js";
import {sendMessage} from "@/Stores/tgbell.js";

const input = reactive({
  name: {
    data: "",
    translated: false,
    error: false,
  },
  phone: {
    data: "+7 (9",
    translated: false,
    error: false,
  },
  city: {
    data: "",
    translated: false,
    error: false,
  },
  robot: {
    isRobot: true,
    error: false,
  },
});

const router = useRouter();
const emits = defineEmits(["successStep"]);
const makeMessage = () => {
  input.name.error = false;
  input.phone.error = false;
  input.city.error = false;
  input.robot.error = false;

  if (input.name.data.length <= 0) {
    input.name.error = true;
  } else if (input.city.data.length <= 0) {
    input.city.error = true;
  } else if (input.phone.data.length <= 16) {
    input.phone.error = true;
  } else if (input.robot.isRobot) {
    input.robot.error = true;
  } else {
    let order = "";
    for (const model of userCart.cart) {
      model.name
        ? (order += model.name + ", " + model.sku + ", " + model.count + "шт. \n")
        : null;
    }
    const text = `Имя: ${input.name.data}, \nТелефон: ${input.phone.data}, \nГород: ${input.city.data}, \nЗаказ: ${order}`;
    sendMessage(text)
    localStorage.clear()
    emits('successStep')
  }

};

</script>
<style scoped lang="scss">
.form {
  height: 100%;
  position: sticky;
  top: 50px;
}
.col {
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;

}
.err {
  color: red;
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  left: 0;
}
.input-wrapper {
  position: relative;
  width: 100%;

  input {
    border-radius: 30px;
    border: 1px solid var(--GraphiteGray, #474A51);
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    color: #fff;

    &.error {
      border-color: red;
    }
  }
  label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    transition: 0.3s ease;
  }

  &.translated {
    label {
      background-color: #343434;
      font-size: 12px;
      padding-left: 5px;
      padding-right: 5px;
      top: 0;
    }
  }
}
.recaptcha {
  box-sizing: border-box;
  padding: 20px;
  justify-content: center;
  display: flex;
}
@media screen and (max-width: 768px) {

}
</style>
