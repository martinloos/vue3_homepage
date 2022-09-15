<script setup>
import { ref, onMounted } from 'vue';
import { initTheme } from '@/composables/theme.js';
import DarkModeToggle from '@/components/DarkModeToggle.vue';

const open = ref(false);
const Links = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'About Me', link: '/about' },
  { name: 'Contact', link: '/contact' },
];
onMounted(() => {
  initTheme();
  return { Links };
});
const darkModeRef = ref();

const menuOpen = () => {
  open.value = !open.value;
};
const menuClose = () => {
  open.value = false;
};
const toggle = () => {
  darkModeRef.value.toggleDark();
};
</script>

<template>
  <div
    :class="[open ? 'duration-300 ease-in' : 'transition-none']"
    class="relative justify-between items-center py-3.5 px-6 text-menu-dark dark:text-white bg-white
  dark:bg-menu-dark shadow md:flex"
  >
    <div class="flex items-center">
      <h1 class="mx-auto text-2xl md:ml-0 md:text-3xl">
        martin
        <span class="-ml-2 text-custom-purple dark:text-custom-green">LOOS</span>
      </h1>
    </div>
    <span
      class="absolute top-2.5 left-6 text-4xl cursor-pointer md:hidden"
      @click="menuOpen"
    >
      <i
        :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"
        class="text-menu-dark dark:text-white"
      />
    </span>
    <ul
      class="absolute px-10 pt-12 pb-10 w-full h-screen
    bg-white dark:bg-menu-dark duration-300 ease-in md:flex md:static md:items-center md:p-0 md:mt-0 md:w-auto
    md:h-fit md:bg-white md:transition-none"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li
        v-for="(link, index) in Links"
        :key="index"
        class="mb-6 md:my-0 md:mx-4"
      >
        <router-link
          :to="link.link"
          class="text-xl hover:text-custom-purple dark:hover:text-custom-green"
          @click="menuClose"
        >
          {{ link.name }}
        </router-link>
      </li>
      <li class="w-0 md:w-32" />
    </ul>
    <div
      class="absolute top-2.5 right-6 w-9 md:top-2.5 md:right-8 md:w-11"
    >
      <component
        :is="DarkModeToggle"
        ref="darkModeRef"
        @click="toggle"
      />
    </div>
  </div>
</template>
