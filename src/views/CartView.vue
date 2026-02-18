<script setup>
import Cart from "../components/Cart.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>
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
        <div data-aos="fade-up">
          <Cart />
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>
