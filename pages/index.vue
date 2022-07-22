<template>
  <!-- <Tutorial /> -->
  <div class="flex flex-col items-center">
    <h1 class="text-5xl text-center font-bold">
      Bem vindo aos dados do Rick and Morty API
    </h1>
    <span class="text-xl text-center"
      >Escolha o que você deseja ver sobre a série</span
    >
    <NuxtLink to="/characters">Personagens</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
