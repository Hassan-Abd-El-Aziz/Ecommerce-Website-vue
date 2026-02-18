<template>
  <footer
    style="direction: rtl"
    class="relative bg-luxury-navy border-t border-white/10 pt-16 pb-8 overflow-hidden"
  >
    <!-- Background decoration -->
    <div
      class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent"
    ></div>
    <div
      class="absolute -top-24 -right-24 w-64 h-64 bg-luxury-gold/5 rounded-full filter blur-3xl"
    ></div>
    <div
      class="absolute -bottom-24 -left-24 w-64 h-64 bg-luxury-burgundy/5 rounded-full filter blur-3xl"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- About -->
        <div>
          <h3 class="font-display text-2xl font-bold mb-6">
            <span class="gold-gradient bg-clip-text text-transparent">HAS</span>
          </h3>
          <p class="text-gray-400 mb-6">
            وجهتك الأولى للتسوق الفاخر، نقدم أفخم المنتجات من أشهر الماركات
            العالمية.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              class="glass-effect p-3 rounded-lg text-gray-400 hover:text-luxury-gold hover:scale-110 transition-all duration-300"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-display text-lg font-semibold mb-6 text-white">
            روابط سريعة
          </h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.url"
                class="text-gray-400 hover:text-luxury-gold transition-colors inline-flex items-center group"
              >
                <span
                  class="w-0 group-hover:w-2 h-0.5 bg-luxury-gold transition-all duration-300 mr-2"
                ></span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h4 class="font-display text-lg font-semibold mb-6 text-white">
            خدمة العملاء
          </h4>
          <ul class="space-y-3">
            <li v-for="service in customerService" :key="service.name">
              <a
                :href="service.url"
                class="text-gray-400 hover:text-luxury-gold transition-colors inline-flex items-center group"
              >
                <span
                  class="w-0 group-hover:w-2 h-0.5 bg-luxury-gold transition-all duration-300 mr-2"
                ></span>
                {{ service.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 className="font-display text-lg font-semibold mb-6 text-white">
            النشرة البريدية
          </h4>
          <p class="text-gray-400 mb-4">
            اشترك لتحصل على آخر العروض والتخفيضات
          </p>
          <form @submit.prevent="subscribeNewsletter" class="space-y-3">
            <input
              type="email"
              v-model="email"
              placeholder="بريدك الإلكتروني"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-luxury-gold focus:outline-none transition-colors text-white placeholder-gray-500"
            />
            <button
              type="submit"
              class="w-full px-6 py-3 bg-luxury-gold text-luxury-navy font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              اشتراك
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/10">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 Luxe. جميع الحقوق محفوظة
          </p>
          <div class="flex space-x-4 text-sm">
            <a
              href="#"
              class="text-gray-500 hover:text-luxury-gold transition-colors"
              >سياسة الخصوصية</a
            >
            <a
              href="#"
              class="text-gray-500 hover:text-luxury-gold transition-colors"
              >شروط الاستخدام</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

const socialLinks = [
  {
    name: "Facebook",
    url: "#",
    icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    name: "Instagram",
    url: "#",
    icon: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.248.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.217 1.79-.465 2.428a4.89 4.89 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.248-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.217-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.89 4.89 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.065.217-1.79.465-2.428a4.89 4.89 0 011.153-1.772A4.89 4.89 0 015.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2z",
  },
  {
    name: "Twitter",
    url: "#",
    icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
  },
];

const quickLinks = [
  { name: "الرئيسية", url: "/" },
  { name: "المنتجات", url: "/products" },
  { name: "التصنيفات", url: "/categories" },
  { name: "العروض", url: "/offers" },
  { name: "اتصل بنا", url: "/contact" },
];

const customerService = [
  { name: "مساعدة", url: "/help" },
  { name: "تتبع الطلب", url: "/track-order" },
  { name: "الشحن والتوصيل", url: "/shipping" },
  { name: "الإرجاع والاستبدال", url: "/returns" },
  { name: "الأسئلة الشائعة", url: "/faq" },
];

const subscribeNewsletter = () => {
  if (email.value) {
    // Handle newsletter subscription
    console.log("Subscribed:", email.value);
    email.value = "";
    alert("شكراً لاشتراكك في نشرتنا البريدية");
  }
};
</script>
