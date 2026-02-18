<template>
  <div class="min-h-screen bg-luxury-navy relative overflow-hidden">
    <!-- Background decoration -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-0 right-0 w-1/3 h-1/3 bg-luxury-gold/5 rounded-full filter blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-luxury-burgundy/5 rounded-full filter blur-3xl animate-float animation-delay-3000"
      ></div>
    </div>

    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar />

      <main class="flex-grow container mx-auto px-4 pt-32 pb-20">
        <!-- Page Header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <h1
            class="text-4xl md:text-5xl font-display font-bold mb-4 gold-gradient bg-clip-text text-transparent"
          >
            تصفح حسب التصنيف
          </h1>
          <p class="text-gray-400 max-w-2xl mx-auto">
            اكتشف مجموعاتنا الفاخرة من خلال التصنيفات المتنوعة التي نقدمها.
          </p>
        </div>

        <!-- Categories Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <div
            v-for="(category, index) in categories"
            :key="category"
            class="group"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <a
              href="#"
              @click.prevent="navigateToCategory(category)"
              class="block glass-effect rounded-2xl p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/20"
            >
              <div class="mb-4 inline-block p-4 bg-luxury-gold/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 text-luxury-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3
                class="font-display text-xl font-semibold text-white group-hover:text-luxury-gold transition-colors"
              >
                {{ category }}
              </h3>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { products } from "../data/products";

const router = useRouter();

// Get unique categories from products data
const categories = computed(() => {
  const categorySet = new Set(products.map((p) => p.category));
  return [...categorySet];
});

// Function to navigate to products page with category filter in the query
const navigateToCategory = (category) => {
  router.push({ path: "/products", query: { category: category } });
};
</script>

<style scoped>
.animation-delay-3000 {
  animation-delay: 3s;
}
</style>
