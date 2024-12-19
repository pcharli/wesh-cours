<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'
</script>

<template>
  <HeaderPage></HeaderPage>

  <RouterView />

  <FooterPage></FooterPage>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}


</style>
