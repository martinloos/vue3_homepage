<template>
  <div style="width: auto; height: 80%">
    <div
      v-if="theme"
    >
      <img
        src="../assets/img/bulb_off.svg"
        alt="smt"
        style="height: 100%"
      >
    </div>
    <div
      v-else
    >
      <img
        src="../assets/img/bulb_on.svg"
        alt="smt"
      >
    </div>
  </div>
</template>

<script>
import { switchTheme } from '@/composables/theme.js';

export default {
  name: 'DarkModeToggle',
  computed: {
    theme() {
      return this.getStoredTheme();
    },
  },
  beforeMount() {
    this.initToggle();
  },
  methods: {
    toggleDark() {
      switchTheme();
      this.$store.commit('changeTheme');
    },
    initToggle() {
      const val = localStorage.getItem('theme');
      if ((val === 'dark') && this.getStoredTheme() === false) {
        this.$store.commit('changeTheme');
      }
    },
    getStoredTheme() {
      return this.$store.getters.getTheme;
    },
  },
};
</script>
