import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/Pages/PageHome.vue'
import DrillSinglePage from '@/Pages/PageDrillsSingle.vue'
import PageDrills from '@/Pages/PageDrills.vue'
import PacksSinglePage from '@/Pages/PagePacksSingle.vue'
import PagePacks from '@/Pages/PagePacks.vue'
import UserCart from "@/components/Layout/UserCart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome,
    },{
      path: '/drill/',
      name: 'drill',
      component: PageDrills,
    },{
      path: '/drill/:name',
      name: 'drillSinglePage',
      component: DrillSinglePage,
      meta: {
        breadcrumb: "Модели", // For breadcrumbs in navbar
        to: "/drill", // For breadcrumbs in navbar
      },
    },{
      path: '/pack/',
      name: 'packs',
      component: PagePacks,
    },{
      path: '/packs/:name',
      name: 'packsSinglePage',
      component: PacksSinglePage,
      meta: {
        breadcrumb: "Комплектации", // For breadcrumbs in navbar
        to: "/pack", // For breadcrumbs in navbar
      },
    },{
      path: '/cart',
      name: 'userCart',
      component: UserCart,
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 100, behavior: 'smooth', block: 'start' };
    } else {
      return { top: 0, behavior: 'smooth' };
    }

  }
})

export default router
