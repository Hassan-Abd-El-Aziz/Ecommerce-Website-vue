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
        class="absolute top-1/3 right-1/4 w-80 h-80 bg-luxury-gold/10 rounded-full filter blur-3xl animate-float animation-delay-3000"
      ></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <Navbar />

      <!-- Page Header with Parallax -->
      <section class="relative pt-32 pb-20 overflow-hidden">
        <div
          class="absolute inset-0 bg-gradient-to-r from-luxury-navy via-luxury-navy/95 to-luxury-navy"
        ></div>
        <div class="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Offers Background"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="container mx-auto px-4 relative z-10">
          <div class="text-center max-w-3xl mx-auto">
            <div class="inline-block mb-4" data-aos="fade-down">
              <span
                class="glass-effect px-4 py-2 rounded-full text-luxury-gold text-sm font-semibold"
              >
                🎉 عروض حصرية
              </span>
            </div>
            <h1
              class="font-display text-4xl md:text-6xl font-bold mb-6 gold-gradient bg-clip-text text-transparent"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              عروض خاصة لفترة محدودة
            </h1>
            <p
              class="text-xl text-gray-300 mb-8"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              استمتع بتخفيضات تصل إلى 70% على مجموعة مختارة من أفخم المنتجات
            </p>
            <div
              class="flex justify-center space-x-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div class="glass-effect px-6 py-3 rounded-lg">
                <span class="text-3xl font-bold text-luxury-gold">70%</span>
                <span class="text-gray-400 mr-2">خصم</span>
              </div>
              <div class="glass-effect px-6 py-3 rounded-lg">
                <span class="text-3xl font-bold text-luxury-gold">24</span>
                <span class="text-gray-400 mr-2">ساعة متبقية</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Countdown Timer -->
      <section class="py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="glass-effect rounded-2xl p-8">
              <h2
                class="text-2xl font-display font-bold text-center mb-8 text-white"
              >
                العرض ينتهي خلال
              </h2>
              <div class="grid grid-cols-4 gap-4 text-center">
                <div
                  v-for="(value, label) in countdown"
                  :key="label"
                  class="relative"
                  data-aos="zoom-in"
                  :data-aos-delay="200 * Object.keys(countdown).indexOf(label)"
                >
                  <div class="bg-luxury-navy/50 rounded-lg p-4">
                    <span
                      class="text-4xl md:text-5xl font-display font-bold text-luxury-gold"
                      >{{ value }}</span
                    >
                    <span class="block text-sm text-gray-400 mt-2">{{
                      label
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Flash Sale Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="relative mb-12">
            <h2
              class="text-3xl md:text-4xl font-display font-bold text-white inline-block"
              data-aos="fade-right"
            >
              ⚡ عروض خاطفة
            </h2>
            <div
              class="absolute -top-6 -right-6 w-24 h-24 bg-luxury-gold/20 rounded-full filter blur-2xl animate-pulse-slow"
            ></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(offer, index) in flashOffers"
              :key="offer.id"
              class="group relative"
              :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
              data-aos-duration="800"
            >
              <!-- Offer Card with Ribbon -->
              <div
                class="relative glass-effect rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/20"
              >
                <!-- Sale Ribbon -->
                <div class="absolute top-4 right-4 z-20">
                  <div class="relative">
                    <div class="absolute inset-0 bg-luxury-gold blur-md"></div>
                    <div
                      class="relative bg-gradient-to-r from-luxury-gold to-luxury-burgundy text-luxury-navy px-4 py-1 rounded-full font-bold text-sm"
                    >
                      {{ offer.discount }}% خصم
                    </div>
                  </div>
                </div>

                <!-- Timer Badge -->
                <div class="absolute top-4 left-4 z-20">
                  <div
                    class="glass-effect px-3 py-1 rounded-full text-xs text-luxury-gold"
                  >
                    ⏰ {{ offer.timeLeft }}
                  </div>
                </div>

                <!-- Image -->
                <div class="relative overflow-hidden h-64">
                  <img
                    :src="offer.image"
                    :alt="offer.name"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-luxury-navy via-transparent to-transparent"
                  ></div>
                </div>

                <!-- Content -->
                <div class="p-6">
                  <h3
                    class="font-display text-xl font-semibold mb-2 text-white group-hover:text-luxury-gold transition-colors"
                  >
                    {{ offer.name }}
                  </h3>

                  <p class="text-gray-400 text-sm mb-4">
                    {{ offer.description }}
                  </p>

                  <!-- Price -->
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <span class="text-2xl font-bold text-luxury-gold"
                        >${{ offer.priceAfter }}</span
                      >
                      <span class="text-sm text-gray-500 line-through mr-2"
                        >${{ offer.priceBefore }}</span
                      >
                    </div>
                    <div class="text-sm text-luxury-gold">
                      وفر ${{ offer.priceBefore - offer.priceAfter }}
                    </div>
                  </div>

                  <!-- Progress Bar -->
                  <div class="mb-4">
                    <div
                      class="flex justify-between text-xs text-gray-400 mb-1"
                    >
                      <span>تم البيع: {{ offer.sold }}%</span>
                      <span>متبقي: {{ offer.remaining }} قطعة</span>
                    </div>
                    <div
                      class="w-full h-2 bg-white/10 rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full bg-gradient-to-r from-luxury-gold to-luxury-burgundy rounded-full"
                        :style="{ width: offer.sold + '%' }"
                      ></div>
                    </div>
                  </div>

                  <!-- Action Button -->
                  <button
                    class="w-full relative overflow-hidden px-4 py-3 rounded-lg bg-luxury-gold/10 hover:bg-luxury-gold text-luxury-gold hover:text-luxury-navy transition-all duration-300 group/btn font-semibold"
                  >
                    <span class="relative z-10">اشتري الآن</span>
                    <div
                      class="absolute inset-0 bg-luxury-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"
                    ></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Special Offers Grid -->
      <section class="py-16 luxury-gradient">
        <div class="container mx-auto px-4">
          <h2
            class="text-3xl md:text-4xl font-display font-bold text-center mb-4 gold-gradient bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            عروض مميزة
          </h2>
          <p
            class="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            اكتشف تشكيلتنا المميزة من المنتجات الفاخرة بأسعار استثنائية
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              v-for="(offer, index) in specialOffers"
              :key="offer.id"
              class="group relative"
              :data-aos="index === 0 ? 'fade-right' : 'fade-left'"
              data-aos-duration="800"
            >
              <div class="relative h-96 rounded-2xl overflow-hidden">
                <img
                  :src="offer.image"
                  :alt="offer.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <!-- Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-luxury-navy via-luxury-navy/50 to-transparent"
                ></div>

                <!-- Content -->
                <div class="absolute bottom-0 left-0 right-0 p-8">
                  <div
                    class="inline-block glass-effect px-4 py-2 rounded-full text-luxury-gold text-sm font-semibold mb-4"
                  >
                    {{ offer.tag }}
                  </div>

                  <h3 class="font-display text-2xl font-bold text-white mb-2">
                    {{ offer.name }}
                  </h3>
                  <p class="text-gray-300 mb-4">{{ offer.description }}</p>

                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-3xl font-bold text-luxury-gold"
                        >${{ offer.price }}</span
                      >
                      <span class="text-sm text-gray-400 line-through mr-2"
                        >${{ offer.originalPrice }}</span
                      >
                    </div>
                    <button
                      class="px-6 py-2 bg-luxury-gold text-luxury-navy font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                    >
                      تسوق الآن
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bundle Offers -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2
            class="text-3xl md:text-4xl font-display font-bold text-center mb-12 gold-gradient bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            عروض المجموعات
          </h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              v-for="(bundle, index) in bundleOffers"
              :key="bundle.id"
              class="group relative"
              data-aos="zoom-in"
              :data-aos-delay="index * 200"
            >
              <div class="glass-effect rounded-2xl p-1">
                <div class="bg-luxury-navy/50 rounded-xl p-6">
                  <div class="flex items-center mb-4">
                    <span class="text-4xl mr-4">🎁</span>
                    <div>
                      <h3 class="font-display text-xl font-bold text-white">
                        {{ bundle.name }}
                      </h3>
                      <p class="text-sm text-gray-400">
                        {{ bundle.items }} منتجات
                      </p>
                    </div>
                  </div>

                  <div class="grid grid-cols-3 gap-2 mb-4">
                    <div
                      v-for="product in bundle.products"
                      :key="product.id"
                      class="relative"
                    >
                      <img
                        :src="product.image"
                        :alt="product.name"
                        class="w-full h-20 object-cover rounded-lg"
                      />
                      <div
                        class="absolute inset-0 bg-black/20 rounded-lg"
                      ></div>
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-2xl font-bold text-luxury-gold"
                        >${{ bundle.price }}</span
                      >
                      <span class="text-sm text-gray-500 line-through mr-2"
                        >${{ bundle.originalPrice }}</span
                      >
                      <span class="text-sm text-green-500 mr-2"
                        >وفر {{ bundle.save }}%</span
                      >
                    </div>
                    <button
                      class="px-4 py-2 bg-luxury-gold/10 hover:bg-luxury-gold text-luxury-gold hover:text-luxury-navy rounded-lg transition-all duration-300"
                    >
                      أضف المجموعة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div
            class="max-w-3xl mx-auto text-center glass-effect rounded-3xl p-12"
            data-aos="zoom-in"
          >
            <h2
              class="font-display text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              احصل على العروض الحصرية
            </h2>
            <p class="text-gray-300 mb-8">
              اشترك في نشرتنا البريدية واحصل على خصم 20% على أول طلبية
            </p>
            <form
              @submit.prevent="subscribeNewsletter"
              class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                v-model="newsletterEmail"
                placeholder="بريدك الإلكتروني"
                class="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-luxury-gold focus:outline-none transition-colors text-white placeholder-gray-500"
              />
              <button
                type="submit"
                class="px-8 py-3 bg-luxury-gold text-luxury-navy font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

// Countdown Timer
const countdown = ref({
  أيام: 0,
  ساعات: 0,
  دقائق: 0,
  ثواني: 0,
});

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 3); // 3 أيام من الآن

const updateCountdown = () => {
  const now = new Date();
  const difference = targetDate - now;

  if (difference > 0) {
    countdown.value = {
      أيام: Math.floor(difference / (1000 * 60 * 60 * 24)),
      ساعات: Math.floor((difference / (1000 * 60 * 60)) % 24),
      دقائق: Math.floor((difference / 1000 / 60) % 60),
      ثواني: Math.floor((difference / 1000) % 60),
    };
  }
};

// Flash Offers Data
const flashOffers = ref([
  {
    id: 1,
    name: "ساعة رولكس كلاسيكية",
    description: "ساعة فاخرة من مجموعة التيملس الكلاسيكية",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    priceBefore: 25000,
    priceAfter: 17500,
    discount: 30,
    sold: 75,
    remaining: 5,
    timeLeft: "3 ساعات",
  },
  {
    id: 2,
    name: "عقد من اللؤلؤ والماس",
    description: "عقد فاخر من اللؤلؤ الطبيعي مع الماس",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    priceBefore: 15000,
    priceAfter: 9000,
    discount: 40,
    sold: 60,
    remaining: 8,
    timeLeft: "5 ساعات",
  },
  {
    id: 3,
    name: "حقيبة شانيل جلدية",
    description: "حقيبة يد فاخرة من مجموعة شانيل المحدودة",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    priceBefore: 8500,
    priceAfter: 5950,
    discount: 30,
    sold: 90,
    remaining: 2,
    timeLeft: "ساعتان",
  },
]);

// Special Offers
const specialOffers = ref([
  {
    id: 1,
    name: "مجموعة الساعات الفاخرة",
    description: "خصم يصل إلى 50% على مجموعة مختارة من الساعات السويسرية",
    image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tag: "🔥 عرض خاص",
    price: 12500,
    originalPrice: 25000,
  },
  {
    id: 2,
    name: "مجوهرات الألماس",
    description: "تخفيضات استثنائية على مجموعة الألماس الفاخر",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tag: "💎 عرض محدود",
    price: 8900,
    originalPrice: 17800,
  },
]);

// Bundle Offers
const bundleOffers = ref([
  {
    id: 1,
    name: "طقم الساعات الفاخرة",
    items: 3,
    price: 22500,
    originalPrice: 35000,
    save: 35,
    products: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "مجموعة المجوهرات الراقية",
    items: 4,
    price: 18500,
    originalPrice: 32000,
    save: 42,
    products: [
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      },
      {
        id: 6,
        image:
          "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
]);

const newsletterEmail = ref("");

const subscribeNewsletter = () => {
  if (newsletterEmail.value) {
    alert("شكراً لاشتراكك! تم إرسال كود الخصم إلى بريدك الإلكتروني");
    newsletterEmail.value = "";
  }
};

let timer = null;

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 50,
    easing: "ease-in-out",
  });

  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<style scoped>
.animation-delay-3000 {
  animation-delay: 3s;
}
</style>
