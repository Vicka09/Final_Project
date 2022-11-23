<script setup>
import NavMenu from '@/components/NavMenu.vue'
import LoginPageVue from '@/components/LoginPage.vue';
</script>


<template>
  <main>
    <NavMenu/>
  <body>
  <RouterView/>
  </body>
  </main>
</template>

<style lang="postcss" scoped>
main {
  @apply h-screen justify-center bg-gradient-to-tr from-green-300 to-yellow-300;
}
body {
    @apply text-center top-3 bottom-7 text-4xl;
}
</style>