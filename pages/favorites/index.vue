<template>
  <div>
    <h1 class="text-center text-xl mb-3 font-bold">Personagens favoritos</h1>
    <div>
      <div v-if="characters" class="flex gap-5 flex-wrap justify-center">
        <div v-for="character in characters">
          <HomeCard :character="character" :key="character.id" :favorites="user.favorites"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { isLogged } from '~/services/userService'
// const ids = [1, 2, 3, 4]
export default {
    middleware:'auth',
  data() {
    return {
      characters: [],
      user:Object
    }
  },
  beforeMount(){
    this.user = isLogged()
  },
  apollo: {
    findFavorites: {
      query: gql`
        query getFavorite($idsFav: [ID!]!) {
          charactersByIds(ids: $idsFav) {
            id
            name
            image
            origin {
              name
            }
          }
        }
      `,
      variables() {
        return {
          idsFav: this.user.favorites,
        }
      },
      update(data) {
        this.characters = data.charactersByIds
      },
    },
  },
}
</script>
