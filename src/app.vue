<template>
  <Header
    id="page-header"
    class="sticky top-0 left-0 z-40 w-[100%] h-fit"
  />
  <div class="relative">
    <router-view
      v-slot="{ Component }"
      class="relative"
    >
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Preloader from '@/components/Preloader.vue';

export default {
  components: { Preloader, Header, Footer },
};
</script>

<style>
.not-visible {
  visibility: hidden;
  opacity: 0;
}

.cst-ease-in {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.1s ease-in;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
