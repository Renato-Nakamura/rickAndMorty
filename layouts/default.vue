<template>
  <div class="bg-ram h-screen">
    <header class="flex justify-between p-3 items-center">
      <NuxtLink to="/" class="flex flex-col items-center">
        <img
          src="http://assets.stickpng.com/images/58f37720a4fa116215a9240f.png"
          class="w-28"
          alt=""
        />
        <span> Characters </span>
      </NuxtLink>
      <div>
        <NuxtLink to="/login"
          ><button>{{ user ? 'Sair' : 'Cadastre-se' }}</button></NuxtLink
        >
        <NuxtLink to="/favorites"><button>Favoritos</button></NuxtLink>
      </div>
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { isLogged } from '~/services/userService'

export default {
  beforeMount() {
    this.user = null
  },
  data() {
    return {
      user: Object,
    }
  },
}
</script>

<style>
.bg-ram {
  background-color: var(--primary);
}
</style>
