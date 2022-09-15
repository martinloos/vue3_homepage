import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@/assets/styles/fonts.css';
import '@/assets/styles/main.css';
import '@/assets/styles/tailwind.css';
import App from '@/app.vue';
import { routes } from '@/routes.js';
import createPersistedState from 'vuex-persistedstate';
import { createStore } from 'vuex';

import AOS from 'aos';
// importing AOS css style globally
import 'aos/dist/aos.css';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

const app = createApp(App);

app.component('DarkModeToggle', {
  /* ... */
});

const store = createStore({
  state() {
    return {
      dark: false,
    };
  },
  getters: {
    getTheme(state) {
      return state.dark;
    },
  },
  mutations: {
    changeTheme(state) {
      this.state.dark = !state.dark;
    },
  },
  plugins: [createPersistedState()],
});

app.use(router);
app.use(store);
app.use(AOS.init());
app.mount('#app');
