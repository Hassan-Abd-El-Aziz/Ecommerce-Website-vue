<template>
  <div
    class="min-h-screen bg-luxury-navy relative overflow-hidden"
    style="direction: rtl"
  >
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

      <main class="flex-grow container mx-auto pt-32 pb-20">
        <!-- Page Header -->
        <div class="text-center mb-16" data-aos="fade-up">
          <h1
            class="text-4xl md:text-5xl font-display font-bold mb-4 gold-gradient bg-clip-text text-transparent"
          >
            تواصل معنا
          </h1>
          <p class="text-gray-400 max-w-2xl mx-auto">
            نحن هنا لمساعدتك. لا تتردد في التواصل معنا لأي استفسار أو مساعدة.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Contact Form -->
          <div class="glass-effect rounded-2xl p-8" data-aos="fade-right">
            <h2 class="text-2xl font-display font-bold text-white mb-6">
              أرسل لنا رسالة
            </h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-300 mb-2"
                  >الاسم</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="form-input"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-300 mb-2"
                  >البريد الإلكتروني</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="form-input"
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-300 mb-2"
                  >الموضوع</label
                >
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  required
                  class="form-input"
                />
              </div>
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-300 mb-2"
                  >رسالتك</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  class="form-input"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  class="w-full px-8 py-3 bg-luxury-gold text-luxury-navy font-bold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
                >
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </div>

          <!-- Contact Info & Map -->
          <div class="space-y-8" data-aos="fade-left" data-aos-delay="200">
            <!-- Contact Details -->
            <div class="glass-effect rounded-2xl p-8">
              <h2 class="text-2xl font-display font-bold text-white mb-6">
                معلومات التواصل
              </h2>
              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="mt-1 text-luxury-gold">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">العنوان</h3>
                    <p class="text-gray-400">
                      123 شارع الفخامة، دبي، الإمارات العربية المتحدة
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="mt-1 text-luxury-gold">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">الهاتف</h3>
                    <p class="text-gray-400" style="direction: ltr">
                      +971 4 123 4567
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="mt-1 text-luxury-gold">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-white">البريد الإلكتروني</h3>
                    <p class="text-gray-400">support@has-luxe.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

const form = ref({ name: "", email: "", subject: "", message: "" });

const submitForm = () => {
  alert(`شكراً لك ${form.value.name}! لقد تم استلام رسالتك بنجاح.`);
  form.value = { name: "", email: "", subject: "", message: "" };
};
</script>

<style scoped>
.animation-delay-3000 {
  animation-delay: 3s;
}
</style>
