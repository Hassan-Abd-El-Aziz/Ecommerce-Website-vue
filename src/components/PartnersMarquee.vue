<template>
  <section class="py-16 bg-luxury-navy/50 relative overflow-hidden">
    <div class="container mx-auto px-4 mb-8">
      <h2
        class="text-3xl font-display font-bold text-center mb-4 gold-gradient bg-clip-text text-transparent"
        data-aos="fade-up"
      >
        شركاء النجاح
      </h2>
      <p
        class="text-gray-400 text-center max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        نفخر بشراكتنا مع أرقى العلامات التجارية العالمية
      </p>
    </div>

    <div class="relative">
      <!-- Gradient overlays -->
      <div
        class="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-luxury-navy to-transparent z-10"
      ></div>
      <div
        class="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-luxury-navy to-transparent z-10"
      ></div>

      <!-- Marquee -->
      <div class="overflow-hidden">
        <div
          class="flex space-x-12 animate-marquee hover:animate-marquee-paused"
          :class="{ 'animate-marquee-paused': isHovered }"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <!-- First set of logos -->
          <div v-for="i in 2" :key="`first-${i}`" class="flex space-x-12">
            <div
              v-for="logo in logos"
              :key="logo.name"
              class="flex items-center justify-center min-w-[150px]"
            >
              <div class="group relative">
                <div
                  class="absolute inset-0 bg-luxury-gold/20 blur-xl group-hover:bg-luxury-gold/30 transition-all duration-500"
                ></div>
                <div class="relative glass-effect px-6 py-4 rounded-lg">
                  <span
                    class="text-2xl font-display font-bold text-white/80 group-hover:text-luxury-gold transition-colors"
                  >
                    {{ logo.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Duplicate for seamless loop -->
          <div v-for="i in 2" :key="`second-${i}`" class="flex space-x-12">
            <div
              v-for="logo in logos"
              :key="`${logo.name}-dup`"
              class="flex items-center justify-center min-w-[150px]"
            >
              <div class="group relative">
                <div
                  class="absolute inset-0 bg-luxury-gold/20 blur-xl group-hover:bg-luxury-gold/30 transition-all duration-500"
                ></div>
                <div class="relative glass-effect px-6 py-4 rounded-lg">
                  <span
                    class="text-2xl font-display font-bold text-white/80 group-hover:text-luxury-gold transition-colors"
                  >
                    {{ logo.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating shapes -->
    <div
      class="absolute top-0 left-1/4 w-64 h-64 bg-luxury-gold/5 rounded-full filter blur-3xl animate-float"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-96 h-96 bg-luxury-burgundy/5 rounded-full filter blur-3xl animate-float animation-delay-2000"
    ></div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isHovered = ref(false);

const logos = [
  { name: "ROLEX" },
  { name: "CARTIER" },
  { name: "TIFFANY" },
  { name: "GUCCI" },
  { name: "PRADA" },
  { name: "LOUIS VUITTON" },
  { name: "CHANEL" },
  { name: "HERMÈS" },
];
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
