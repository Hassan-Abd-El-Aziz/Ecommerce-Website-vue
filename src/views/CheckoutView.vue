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

      <main class="flex-grow container mx-auto px-4 pt-32 pb-20">
        <!-- Page Header -->
        <div class="text-center mb-12" data-aos="fade-up">
          <h1
            class="text-4xl md:text-5xl font-display font-bold mb-4 gold-gradient bg-clip-text text-transparent"
          >
            إتمام عملية الشراء
          </h1>
          <p class="text-gray-400 max-w-2xl mx-auto">
            خطوات قليلة تفصلك عن امتلاك منتجاتك الفاخرة.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 items-start">
          <!-- Checkout Form -->
          <div class="lg:col-span-2 space-y-8" data-aos="fade-right">
            <!-- Shipping Details -->
            <div class="glass-effect rounded-2xl p-8">
              <h2
                class="text-2xl font-display font-bold text-white mb-6 border-b border-white/10 pb-4"
              >
                1. معلومات الشحن
              </h2>
              <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="fullName" class="form-label">الاسم الكامل</label>
                  <input
                    type="text"
                    id="fullName"
                    class="form-input"
                    required
                  />
                </div>
                <div>
                  <label for="email" class="form-label"
                    >البريد الإلكتروني</label
                  >
                  <input type="email" id="email" class="form-input" required />
                </div>
                <div class="md:col-span-2">
                  <label for="address" class="form-label">العنوان</label>
                  <input
                    type="text"
                    id="address"
                    class="form-input"
                    placeholder="اسم الشارع، رقم المبنى"
                    required
                  />
                </div>
                <div>
                  <label for="city" class="form-label">المدينة</label>
                  <input type="text" id="city" class="form-input" required />
                </div>
                <div>
                  <label for="country" class="form-label">الدولة</label>
                  <input type="text" id="country" class="form-input" required />
                </div>
              </form>
            </div>

            <!-- Payment Details -->
            <div class="glass-effect rounded-2xl p-8">
              <h2
                class="text-2xl font-display font-bold text-white mb-6 border-b border-white/10 pb-4"
              >
                2. طريقة الدفع
              </h2>
              <form class="space-y-6">
                <div>
                  <label for="cardName" class="form-label"
                    >الاسم على البطاقة</label
                  >
                  <input
                    type="text"
                    id="cardName"
                    class="form-input"
                    required
                  />
                </div>
                <div>
                  <label for="cardNumber" class="form-label">رقم البطاقة</label>
                  <input
                    type="text"
                    id="cardNumber"
                    class="form-input"
                    placeholder="•••• •••• •••• ••••"
                    required
                  />
                </div>
                <div class="grid grid-cols-2 gap-6">
                  <div>
                    <label for="expiryDate" class="form-label"
                      >تاريخ الانتهاء</label
                    >
                    <input
                      type="text"
                      id="expiryDate"
                      class="form-input"
                      placeholder="MM / YY"
                      required
                    />
                  </div>
                  <div>
                    <label for="cvv" class="form-label">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      class="form-input"
                      placeholder="•••"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="lg:col-span-1" data-aos="fade-left" data-aos-delay="200">
            <div class="glass-effect rounded-2xl p-6 sticky top-28">
              <h2
                class="text-2xl font-display font-bold text-white mb-6 border-b border-white/10 pb-4"
              >
                ملخص الطلب
              </h2>
              <div class="space-y-4 max-h-64 overflow-y-auto pr-2">
                <div
                  v-for="item in cartStore.items"
                  :key="item.id"
                  class="flex justify-between items-center text-sm"
                >
                  <div class="flex items-center gap-3">
                    <img
                      :src="item.image || item.url"
                      :alt="item.name"
                      class="w-12 h-12 rounded-md object-cover"
                    />
                    <div>
                      <p class="text-white font-semibold line-clamp-1">
                        {{ item.name }}
                      </p>
                      <p class="text-gray-400">الكمية: {{ item.quantity }}</p>
                    </div>
                  </div>
                  <p class="text-white font-semibold">
                    ${{ (item.price * item.quantity).toFixed(2) }}
                  </p>
                </div>
              </div>

              <div
                v-if="cartStore.items.length === 0"
                class="text-center text-gray-400 py-8"
              >
                سلتك فارغة.
              </div>

              <div class="border-t border-white/10 pt-4 mt-4 space-y-3">
                <div class="flex justify-between text-gray-300">
                  <span>المجموع الفرعي</span>
                  <span class="font-semibold"
                    >${{ cartStore.cartTotal.toFixed(2) }}</span
                  >
                </div>
                <div class="flex justify-between text-gray-300">
                  <span>رسوم الشحن</span>
                  <span class="font-semibold"
                    >${{ shippingCost.toFixed(2) }}</span
                  >
                </div>
                <div
                  class="flex justify-between text-white text-xl font-bold border-t border-white/10 pt-3 mt-3"
                >
                  <span>المجموع الكلي</span>
                  <span class="text-luxury-gold"
                    >${{
                      (cartStore.cartTotal + shippingCost).toFixed(2)
                    }}</span
                  >
                </div>
              </div>

              <button
                @click="placeOrder"
                class="mt-6 w-full px-8 py-3 bg-luxury-gold text-luxury-navy font-bold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                تأكيد الطلب
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { useCartStore } from "../data/cart";

const router = useRouter();
const cartStore = useCartStore();

const shippingCost = computed(() => (cartStore.items.length > 0 ? 25.0 : 0.0)); // Example shipping cost

const placeOrder = () => {
  if (cartStore.items.length === 0) {
    alert("سلة التسوق فارغة! لا يمكنك إتمام الطلب.");
    return;
  }
  // Here you would typically process the payment and save the order
  alert("تم استلام طلبك بنجاح! سيتم توجيهك للصفحة الرئيسية.");
  cartStore.clearCart();
  router.push("/");
};
</script>

<style scoped>
.animation-delay-3000 {
  animation-delay: 3s;
}
</style>
