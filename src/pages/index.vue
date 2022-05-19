<script setup>
import { ref, onMounted } from 'vue';
import { initTheme } from '@/composables/theme.js';
import DarkModeToggle from '@/components/DarkModeToggle.vue';

onMounted(() => {
  initTheme();
});
const darkModeRef = ref();

const toggle = () => {
  darkModeRef.value.toggleDark();
};
</script>

<template>
  <header class="absolute inset-x-0 top-0">
    <component
      :is="DarkModeToggle"
      ref="darkModeRef"
      style="width: 100vw; height: 50px"
      @click="toggle"
    />
  </header>

  <main class="flex flex-col justify-center items-center py-16 px-4 mx-auto max-w-3xl h-screen">
    <h1 class="pb-20 text-6xl text-center text-gray-700 dark:text-gray-100 transition-colors">
      Vue.js homepage
    </h1>

    <div class="flex justify-center pb-10 space-x-4">
      <a
        target="_blank"
        rel="noopener"
        href="https://open.vscode.dev/lecoueyl/vue3-template"
        class="inline-flex items-center py-4 px-6 space-x-1 font-medium text-indigo-50 bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-xl hover:shadow-md transition duration-300"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          class="w-5 h-5 stroke-2"
        >
          <path d="M4 8l2-1l10 13l4-2V6l-4-2L6 17l-2-1z" />
        </svg>
        <span>Open in VSC</span>
      </a>
      <a
        target="_blank"
        rel="noopener"
        href="https://github.com/lecoueyl/vue3-template"
        class="inline-flex items-center py-4 px-6 space-x-1 font-medium text-indigo-50 bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-xl hover:shadow-md transition duration-300"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          class="w-5 h-5 stroke-2"
        >
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21" />
        </svg>
        <span>View on Github</span>
      </a>
    </div>
  </main>
</template>

<style>
body {
  @apply dark:bg-gray-900 dark:text-gray-50;
}
</style>
