<template>
  <div>
    <Header class="sticky top-0 z-50" />
    <router-view class="relative" />
  </div>
</template>
<script>
import Header from '@/components/Header.vue';

export default {
  components: { Header },
};
</script>
