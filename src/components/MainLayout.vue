<script setup>
import NavMenu from '@/components/NavMenu.vue'
</script>

<template>
  <main>
  <div class="Top">
    <NavMenu />
  </div>
    <RouterView />
  </main>
</template>

<style lang="postcss" scoped>
.Top {
  @apply container max-w-screen-2xl flex w-full text-lg text-white justify-center bg-emerald-700;
}

main {
  @apply max-w-screen-2xl bg-green-100;
}

</style>
