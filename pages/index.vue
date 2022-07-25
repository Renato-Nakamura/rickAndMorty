<template>
  <!-- <Tutorial /> -->
  <div class="flex flex-col items-center gap-20">
    <div class="flex flex-col items-center">
      <h1 class="text-2xl text-center font-bold">Bem vindo aos dados do</h1>
      <img
        src="http://assets.stickpng.com/images/58f37720a4fa116215a9240f.png"
        class="w-56"
        alt=""
      />
    </div>
    <div class="flex flex-col items-center">
      <span class="text-center"
        >Escolha o que você deseja ver sobre a série:</span
      >
      <NuxtLink to="/characters" class="font-bold text-xl">Personagens</NuxtLink>

    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
