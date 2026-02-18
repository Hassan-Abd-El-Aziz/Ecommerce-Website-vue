import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OffersView from "../views/OffersView.vue";
import ProductsView from "../views/ProductsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/offers",
      name: "offers",
      component: OffersView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView, // مؤقتاً نفس الصفحة الرئيسية
    },
    {
      path: "/categories",
      name: "categories",
      component: HomeView, // مؤقتاً نفس الصفحة الرئيسية
    },
    {
      path: "/contact",
      name: "contact",
      component: HomeView, // مؤقتاً نفس الصفحة الرئيسية
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
