<script setup>
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/vue/24/solid";
import { useCartStore } from "../data/cart";
const cartStore = useCartStore();
const increment = (id) => {
  cartStore.increaseQuantity(id);
};
const decrement = (id) => {
  cartStore.decreaseQuantity(id);
};
const remove = (id) => {
  cartStore.removeItem(id);
};
</script>
<template>
  <div class="max-w-4xl mx-auto">
    <h2
      class="text-3xl md:text-4xl font-display font-bold mb-8 text-center gold-gradient bg-clip-text text-transparent"
    >
      سلة التسوق ({{ cartStore.cartCount }})
    </h2>

    <!-- Empty Cart -->
    <div
      v-if="cartStore.items.length === 0"
      class="text-center py-12 glass-effect rounded-2xl"
    >
      <p class="text-gray-400 text-xl mb-6">سلة التسوق فارغة حالياً</p>
      <router-link
        to="/products"
        class="inline-block px-8 py-3 bg-luxury-gold text-luxury-navy font-bold rounded-lg hover:bg-white transition-all duration-300"
      >
        تصفح المنتجات
      </router-link>
    </div>

    <!-- Cart Items -->
    <div v-else class="space-y-6">
      <div
        v-for="(item, index) in cartStore.items"
        :key="item.id"
        class="glass-effect rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 group hover:bg-white/5 transition-all duration-300"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <!-- Image -->
        <div
          class="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-white/10"
        >
          <img
            :src="item.image || item.url"
            :alt="item.name"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Details -->
        <div class="flex-grow text-center md:text-right">
          <h3 class="text-xl font-bold text-white mb-1">{{ item.name }}</h3>
          <p class="text-luxury-gold font-display text-lg">
            ${{ item.price.toFixed(2) }}
          </p>
        </div>

        <!-- Quantity Controls -->
        <div
          class="flex items-center gap-4 bg-luxury-navy/50 rounded-lg p-2 border border-white/10"
        >
          <button
            @click="decrement(item.id)"
            class="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <minus-icon class="w-5 h-5" />
          </button>
          <span class="text-white font-bold w-8 text-center">{{
            item.quantity
          }}</span>
          <button
            @click="increment(item.id)"
            class="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <plus-icon class="w-5 h-5" />
          </button>
        </div>

        <!-- Subtotal & Remove -->
        <div
          class="flex flex-col items-center md:items-end gap-2 min-w-[100px]"
        >
          <span class="text-white font-bold text-lg"
            >${{ (item.price * item.quantity).toFixed(2) }}</span
          >
          <button
            @click="remove(item.id)"
            class="text-red-400 hover:text-red-300 text-sm flex items-center gap-1 transition-colors"
          >
            <trash-icon class="w-4 h-4" />
            <span>حذف</span>
          </button>
        </div>
      </div>

      <!-- Summary -->
      <div class="glass-effect rounded-xl p-6 mt-8" data-aos="fade-up">
        <div
          class="flex justify-between items-center mb-6 border-b border-white/10 pb-6"
        >
          <span class="text-xl text-gray-300">المجموع الكلي</span>
          <span class="text-3xl font-display font-bold text-luxury-gold"
            >${{ cartStore.cartTotal.toFixed(2) }}</span
          >
        </div>

        <div class="flex flex-col md:flex-row gap-4 justify-end">
          <button
            @click="cartStore.clearCart()"
            class="px-6 py-3 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-all duration-300"
          >
            إفراغ السلة
          </button>
          <button
            @click="$router.push('/checkout')"
            class="px-8 py-3 bg-luxury-gold text-luxury-navy font-bold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            إتمام الشراء
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
