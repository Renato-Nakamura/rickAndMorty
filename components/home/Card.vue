<template>
  <div
    class="card w-40 flex flex-col items-center"
    @click="$router.push(`/characters/${character.id}`)"
  >
    <img :src="character.image" alt="" />
    <div>
      <div >
        <div v-if="favorites.includes(character.id)">⭐</div>
        <!-- <div v-else>Favoritar</div> -->
      </div>
      <h3>
        {{ character.name }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
    favorites: [],
  },
  
}
</script>
