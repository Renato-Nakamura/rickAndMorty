<template>
  <div>
    <h1 class="text-3xl text-center p-2">Personagens</h1>
    <div v-if="characters" class="flex gap-5 flex-wrap justify-center">
      <div v-for="character in characters.results" >
        <HomeCard :character="character" :key="character.id" :favorites="user?user.favorites: []"/>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import {  isLogged } from '~/services/userService'

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
  beforeMount(){
    this.user = isLogged()
    
  },
  data(){
    return{
      user:Object
    }
  }
}
</script>
