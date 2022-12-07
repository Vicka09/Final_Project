<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const { login, logout } = useAuth()
const router = useRouter()
const route = useRoute()
const username = ref('')
const password = ref('')

const logUserIn = async () => {
  if (await login(username.value, password.value)) {
    if (route.query.redirect) {
      router.push(route.query.redirect)
    } else {
      router.push({ name: 'Home' })
    }
  } else {
    logout()
  }
}
</script>

<template>
  <main>
    <form class="login-form" @submit.prevent="logUserIn">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit" class="bg-amber-500 px-4 py-2">Log In</button>
    </form>
  </main>
</template>

<style scoped lang="postcss">
main {
  @apply m-auto h-full flex;
}
.login-form {
  @apply mx-auto mt-20 mb-48 h-full flex max-w-lg flex-col gap-4 rounded-md bg-emerald-600 p-8 shadow-2xl;
  & input {
    @apply rounded-md px-4 py-2 text-xl ring-2 ring-amber-200;
  }
}
</style>
