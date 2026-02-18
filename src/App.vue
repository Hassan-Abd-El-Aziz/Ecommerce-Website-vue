<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

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
