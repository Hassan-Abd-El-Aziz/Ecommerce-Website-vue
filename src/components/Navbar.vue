<template>
  <nav
    class="fixed top-0 w-full z-50 transition-all duration-500"
    :class="[scrolled ? 'glass-effect py-3' : 'bg-luxury-gold/50 py-6']"
  >
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <span
              class="text-3xl font-display font-bold gold-gradient bg-clip-text text-gray-900 duration-500"
              :class="[scrolled ? 'text-transparent' : 'text-gray-900']"
            >
              Luxe
            </span>
            <span
              class="text-2xl font-display font-bold gold-gradient bg-clip-text text-gray-900 duration-500"
              :class="[scrolled ? 'text-transparent' : 'text-gray-900']"
              >•</span
            >
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-8">
          <a
            v-for="link in menuLinks"
            :key="link.name"
            :href="link.path"
            class="hover:text-luxury-gold transition-all duration-300 relative group text-gray-900 font-bold"
            :class="[scrolled ? 'text-luxury-gold' : 'text-gray-900']"
          >
            {{ link.name }}
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </div>

        <!-- Cart Icon -->
        <div class="flex items-center space-x-4">
          <button
            class="relative p-2 text-gray-300 hover:text-luxury-gold transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span
              class="absolute -top-1 -right-1 bg-luxury-gold text-luxury-navy text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
            >
              3
            </span>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="lg:hidden p-2 text-gray-300 hover:text-luxury-gold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-show="isMobileMenuOpen" class="lg:hidden mt-4 overflow-hidden">
          <div class="flex flex-col space-y-3 py-4 border-t border-white/10">
            <a
              v-for="link in menuLinks"
              :key="link.name"
              :href="link.path"
              class="text-gray-300 hover:text-luxury-gold py-2 px-4 hover:bg-white/5 rounded-lg transition-all"
              @click="closeMenu"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, Text } from "vue";

const scrolled = ref(false);
const isMobileMenuOpen = ref(false);

const menuLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "المنتجات", path: "/products" },
  { name: "التصنيفات", path: "/categories" },
  { name: "العروض", path: "/offers" },
  { name: "اتصل بنا", path: "/contact" },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
