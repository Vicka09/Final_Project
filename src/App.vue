<script setup>
import MainLayout from '@/components/MainLayout.vue'
import LoginPageVue from '@/components/LoginPage.vue';
</script>

<template>
  <h1 class = "title">Grade A : An Easy A for your School ✏️</h1>
  <MainLayout/>
</template>

<style lang="postcss" scoped>
main {
  @apply items-center;
}
  .title{
    @apply m-4 gap-3 text-6xl font-medium text-center text-emerald-800;
  }

nav {
  @apply flex justify-center space-x-4;
  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
