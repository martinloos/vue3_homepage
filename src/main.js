import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@/assets/styles/fonts.css';
import '@/assets/styles/main.css';
import '@/assets/styles/tailwind.css';
import App from '@/app.vue';
import { routes } from '@/routes.js';
import createPersistedState from 'vuex-persistedstate';
import { createStore } from 'vuex';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
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
app.mount('#app');
