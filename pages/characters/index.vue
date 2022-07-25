<template>
  <div>
    <h1 class="text-xl">Personagens</h1>
    <div v-if="characters" class="flex gap-5 flex-wrap justify-center">
      <div v-for="character in characters.results" >
        <HomeCard :character="character" :key="character.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const CHARACTERS = gql`
  query{
    characters {
      results {
        id
        name
        image
      }
    }
  }
`

export default {
  apollo: {
    characters: {
      query: CHARACTERS,
      prefetch: true,
    },
  },
}
</script>
