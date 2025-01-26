<template>
  <div class="row">
    <div class="presentation">
      <div class="content">
        <h2>
          Посмотрите ознакомительную презентацию про бренд TORX
        </h2>
        <p>
          Приглашаем вас ознакомиться с текстовой презентацией, посвященной шуруповертам TORX – инструментам, которые задают новые стандарты надежности и производительности в своей категории. Эта презентация станет вашим путеводителем в мир современных решений для работы с крепежными элементами.

          Не упускайте возможность узнать больше об инновационных функциях и технологиях, применяемых в шуруповертах TORX. Презентация поможет вам сделать осознанный выбор инструмента, который наилучшим образом соответствует вашим потребностям и задачам. Ознакомьтесь с текстовым материалом прямо сейчас и откройте для себя новый уровень эффективности в работе!
        </p>
      </div>
      <div class="image">
        <img :src="presentationPoster" alt="">
      </div>
    </div>

  </div>
</template>

<script setup>
import presentationPoster from '@/assets/images/presentation.webp'
import {ref} from "vue";

const videoBox = ref(null)


</script>

<style scoped lang="scss">
.presentation {
  border-radius: 40px;
  border: 1px solid var(--GraphiteGray, #474A51);
  background: var(--GraphiteBlack, #1C1C1C);
  display: flex;
  justify-content: space-between;
  gap: 50px;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  margin-bottom: 120px;

  .content {
    width: 60%;
  }
  .image {
    width: 20%;
    border-radius: 40px;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      border-radius: 40px;
      max-width: 300px;
    }
  }
}

@media screen and (max-width: 1140px) {
.presentation {
  flex-wrap: wrap;
  .content, .image {
    width: 100%;
    text-align: center;
  }
}
}

@media screen and (max-width: 576px) {

}
</style>
