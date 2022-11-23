<script setup>



</script>

<template>
    <h1>Main Page</h1>
</template>

<style scoped lang="postcss">
.wrapper{
    @apply container mx-auto flex flex-col gap-4 py-4;
}
   
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}

</style> 
