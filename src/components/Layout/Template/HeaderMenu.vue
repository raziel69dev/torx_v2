<template>
    <nav class="menu" ref="torxMenu">
      <div class="hamburger"
           v-show="menuSettings.isCollapsed"
           :class="{show: menuSettings.dropdown}"
           @click="menuSettings.dropdown = !menuSettings.dropdown"
      >
        <span></span>
        <span></span>
      </div>

      <div class="menu-box"
           :class="{
        collapsed: menuSettings.isCollapsed,
        show: menuSettings.dropdown && menuSettings.isCollapsed,
        hide: !menuSettings.dropdown && menuSettings.isCollapsed,
      }">
        <router-link v-for="link of menuItems"
                     @click="menuSettings.isCollapsed = true"
                     :key="link.name"
                     :to="link.link"
           class="menu-link">{{ link.name }}</router-link>
      </div>
    </nav>
</template>
<script setup>
import {onMounted, onUpdated, reactive, ref} from "vue";

const menuItems = [{
  name: 'Преимущества',
  link: '/#features'
},{
  name: 'Модели',
  link: '/#models'
},{
  name: 'Комплектации',
  link: '/#packs'
},{
  name: 'Кто мы',
  link: '/#about'
},{
  name: 'Где купить',
  link: '/#where-to-buy'
}]

const torxMenu = ref(null)

const menuSettings = reactive({
  isCollapsed: false,
  dropdown: false
})

const hideMenu = (e) => {
  const width = e.target.innerWidth
  menuSettings.isCollapsed = window.innerWidth <= 1140
  window.addEventListener("mousedown", closeByClickOutside);

}

const closeByClickOutside = (e) => {
  if (!torxMenu.value.contains(e.target)) {
    menuSettings.dropdown = false
  }
}

onMounted(() => {
  window.addEventListener("resize", hideMenu);
  menuSettings.isCollapsed = window.innerWidth <= 1140
})

</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  position: relative;

  .menu-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;


    &.show {
      display: flex;
    }

    &.hide {
      display: none;
    }
  }
  .menu-link {
    color: var(--SmokeLight, #F2F2F2);
    text-align: center;
    font-family: "Gotham Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &.collapsed {
    display: none;
  }
}

.hamburger {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  cursor: pointer;
  span {
    background-color: #F2F2F2;
    height: 1px;
    width: 22px;
    transition: .3s ease;

  }

  &.show {
    span {
      position: relative;
      &:nth-child(1) {
        rotate: -45deg;
        top: 5px;
      }

      &:nth-child(2) {
        rotate: 45deg;
        top: -6px;
      }

    }
  }
}

@media screen and (max-width: 1280px) {
  .menu {
    margin-right: 0;
    margin-left: auto;

    .menu-link {

    }
  }
}

@media screen and (max-width: 992px) {
  .menu {
    .menu-box {
      position: absolute;
      right: 50%;
      translate: 50% 0;
      top: 50px;
      width: 90vw;

      flex-direction: column;
      gap: 20px;
      z-index: 5;
      justify-content: start;

      padding: 20px;
      box-sizing: border-box;
      border-radius: 15px;
      border: 1px solid var(--GraphiteGray, #474A51);
      background: var(--GraphiteBlack, #1C1C1C);

    }
    .menu-link {
      text-align: end;
    }
  }
}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 576px) {

}
</style>
