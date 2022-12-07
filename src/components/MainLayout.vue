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
<div class = "bottom">
  <p>

  </p>
</div>
</template>

<style lang="postcss" scoped>
.Top {
  @apply container max-w-screen-2xl mb-4 flex w-full text-lg text-white justify-center bg-emerald-700;
}

main {
  @apply min-w-full min-h-full bg-lime-200;
}

.bottom{
  @apply bg-emerald-600 p-12;
}
</style>
