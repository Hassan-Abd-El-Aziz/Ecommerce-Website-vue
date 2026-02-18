import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OffersView from "../views/OffersView.vue";
import ProductsView from "../views/ProductsView.vue";
import CartView from "../views/CartView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import ContactView from "../views/ContactView.vue";
import CheckoutView from "../views/CheckoutView.vue";

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
      component: ProductsView,
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
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
