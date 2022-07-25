<template>
  <div class="bg-ram h-screen">
    <header class="flex justify-between p-3">
      <span>Rick and Morty Characters</span>
      <div>
        <NuxtLink to="/login"><button>Login</button></NuxtLink>
        
        <button>Favorites</button>
      </div>
    </header>
    <main>
        <Nuxt/>
    </main>
  </div>
</template>

<script></script>

<style>
.bg-ram{
  background-color: var(--primary);
}
</style>