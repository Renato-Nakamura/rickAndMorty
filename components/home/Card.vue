<template>
  <div class="card w-40 flex flex-col items-center" @click="$router.push(`/characters/${character.id}`)">
    <img :src="character.image" alt="">
    <h3>
        {{character.name}}
    </h3>
  </div>
</template>

<script>
export default{
    props:{
        character:Object
    }
}
</script>
