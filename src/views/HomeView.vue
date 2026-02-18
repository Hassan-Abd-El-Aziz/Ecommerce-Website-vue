<template>
  <div class="min-h-screen bg-luxury-navy">
    <!-- Floating Background Shapes -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-luxury-gold/5 rounded-full filter blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-40 right-10 w-96 h-96 bg-luxury-burgundy/5 rounded-full filter blur-3xl animate-float animation-delay-2000"
      ></div>
      <div
        class="absolute top-1/2 left-1/3 w-64 h-64 bg-luxury-charcoal/20 rounded-full filter blur-3xl animate-float animation-delay-4000"
      ></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <Navbar />
      <HeroSlider />
      <PartnersMarquee />
      <ProductsSection />
      <FeaturedCards />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar.vue";
import HeroSlider from "../components/HeroSlider.vue";
import PartnersMarquee from "../components/PartnersMarquee.vue";
import ProductsSection from "../components/ProductsSection.vue";
import FeaturedCards from "../components/FeaturedCards.vue";
import Footer from "../components/Footer.vue";
import ProductsView from "./ProductsView.vue";

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 50,
    easing: "ease-in-out",
    delay: 100,
    disable: false,
  });
});
</script>
