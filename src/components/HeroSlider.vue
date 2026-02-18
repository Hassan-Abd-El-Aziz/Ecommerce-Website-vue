<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Slides -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="absolute inset-0 transition-opacity duration-1000"
      :class="currentSlide === index ? 'opacity-100' : 'opacity-0'"
    >
      <!-- Image with overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-luxury-navy via-luxury-navy/50 to-transparent z-10"
      ></div>
      <img
        :src="slide.image"
        :alt="slide.title"
        class="w-full h-full object-cover object-center"
        loading="eager"
      />

      <!-- Content -->
      <div class="absolute inset-0 z-20 flex items-center justify-center">
        <div class="text-center text-white px-4">
          <h1
            class="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {{ slide.title }}
          </h1>
          <p
            class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {{ slide.subtitle }}
          </p>
          <button
            class="group relative px-8 py-4 overflow-hidden rounded-lg bg-luxury-gold text-luxury-navy font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            @click="$router.push('/products')"
          >
            <span class="relative z-10">{{ slide.cta }}</span>
            <div
              class="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
            ></div>
          </button>
        </div>
      </div>
    </div>

    <!-- Slide Indicators -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3"
    >
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="
          currentSlide === index
            ? 'bg-luxury-gold w-10'
            : 'bg-white/50 hover:bg-white'
        "
      ></button>
    </div>

    <!-- Navigation Arrows -->
    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
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
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
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
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentSlide = ref(0);
let slideInterval = null;

const slides = [
  {
    title: "مجموعة الساعات الفاخرة",
    subtitle: "اكتشف مجموعة حصرية من أفخم الساعات السويسرية",
    cta: "تسوق الآن",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "مجوهرات راقية",
    subtitle: "تصاميم حصرية من أرقى المجوهرات العالمية",
    cta: "اكتشف المجموعة",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "إكسسوارات فاخرة",
    subtitle: "أكمل إطلالتك بأفخم الإكسسوارات المصممة خصيصاً لك",
    cta: "تسوق الإكسسوارات",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "مجموع الشاشات الفاخرة",
    subtitle: "أكمل إطلالتك بالإطلاع على أفضل الشاشات المميزة",
    cta: "تسوق الشاشات",
    image: "https://i.ibb.co/r2LPLt4N/klipartz-com-1.png",
  },
  {
    title: "مجموع الموبيلات الفاخرة",
    subtitle: "أكمل إطلالتك بالإطلاع على أفضل الهواتف المميزة",
    cta: "تسوق الهواتف",
    image: "https://m.media-amazon.com/images/I/61bjBijQIXL._AC_SL1500_.jpg",
  },
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const startAutoSlide = () => {
  slideInterval = setInterval(nextSlide, 10000); // تغيير كل 10 ثواني
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
});
</script>
