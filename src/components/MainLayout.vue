<script setup>
import NavMenu from '@/components/NavMenu.vue'
</script>

<template>
  <div class="Top">
    <NavMenu />
  </div>
    <RouterView />
</template>

<style lang="postcss" scoped>
.Top {
  @apply container max-w-screen-2xl flex w-full text-lg text-white justify-center bg-emerald-700;
}

</style>
