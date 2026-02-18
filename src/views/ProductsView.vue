<template>
  <Navbar />
  <section class="py-30 luxury-gradient relative overflow-hidden">
    <!-- Background decoration -->
    <div
      class="absolute top-0 right-0 w-1/3 h-1/3 bg-luxury-gold/5 rounded-full filter blur-3xl animate-float"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-luxury-burgundy/5 rounded-full filter blur-3xl animate-float animation-delay-3000"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2
          class="text-4xl md:text-5xl font-display font-bold mb-4 gold-gradient bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          منتجاتنا الفاخرة
        </h2>
        <p
          class="text-gray-400 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          اكتشف مجموعتنا الحصرية من أفخم المنتجات المصممة بعناية فائقة
        </p>
      </div>

      <!-- Search Box -->
      <div
        class="max-w-xl mx-auto mb-12 relative"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <input
          v-model="searchQuery"
          type="text"
          placeholder="ابحث عن منتج..."
          class="w-full px-6 py-4 bg-white/5 border border-luxury-gold/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all duration-300 pl-12"
        />
        <div
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-gold"
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <!-- Products Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="group relative"
          :data-aos="getRandomAosAnimation()"
          data-aos-duration="800"
          data-aos-offset="200"
          data-aos-once="false"
        >
          <!-- Product Card -->
          <div
            class="glass-effect rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/20"
          >
            <!-- Image Container -->
            <div class="relative overflow-hidden aspect-square">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <!-- Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-luxury-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <!-- Category Badge -->
              <span
                class="absolute top-4 left-4 glass-effect text-xs font-semibold px-3 py-1 rounded-full text-luxury-gold"
              >
                {{ product.category }}
              </span>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3
                class="font-display text-lg font-semibold mb-2 text-white group-hover:text-luxury-gold transition-colors line-clamp-1"
              >
                {{ product.name }}
              </h3>

              <p class="text-gray-400 text-sm mb-3 line-clamp-2">
                {{ product.description }}
              </p>

              <!-- Rating -->
              <div class="flex items-center mb-3">
                <div class="flex text-luxury-gold">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    :class="
                      star <= Math.floor(product.rating)
                        ? 'fill-current'
                        : 'fill-current text-gray-600'
                    "
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <span class="text-xs text-gray-400 mr-2">{{
                  product.rating
                }}</span>
              </div>

              <!-- Price and Button -->
              <div class="flex items-center justify-between">
                <span class="text-2xl font-display font-bold text-luxury-gold">
                  ${{ product.price.toLocaleString() }}
                </span>

                <button
                  @click="addToCart(product)"
                  class="relative overflow-hidden px-4 py-2 rounded-lg bg-luxury-gold/10 hover:bg-luxury-gold text-luxury-gold hover:text-luxury-navy transition-all duration-300 group/btn"
                >
                  <span class="relative z-10 text-sm font-semibold"
                    >أضف للسلة</span
                  >
                  <div
                    class="absolute inset-0 bg-luxury-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mb-12 mt-10">
        <button
          class="group relative px-8 py-4 overflow-hidden rounded-lg bg-luxury-gold text-luxury-navy font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          @click="$router.push('/home')"
        >
          <span class="relative z-10">العوده للصفحة الرئيسية</span>
          <div
            class="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          ></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { products } from "../data/products";
import Navbar from "../components/Navbar.vue";
import { useCartStore } from "../data/cart";
const searchQuery = ref("");

const filteredProducts = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query),
  );
});

const animations = ["fade-up", "fade-right", "zoom-in", "fade-left"];

const getRandomAosAnimation = () => {
  return animations[Math.floor(Math.random() * animations.length)];
};
const cartStore = useCartStore();
function addToCart(product) {
  cartStore.addItem(product);
}
</script>

<style scoped>
.animation-delay-3000 {
  animation-delay: 3s;
}
</style>
