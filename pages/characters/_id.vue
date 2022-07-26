<template>
  <div class="flex flex-col m-auto items-center">
    <h2>Personagem {{ character ? character.name : '' }}</h2>
    <img :src="character.image" alt="" />
    <div>
      <strong>Gênero:</strong>
      <span>{{ character.gender }}</span>
    </div>
    <div>
      <strong>Status:</strong>
      <span>{{ character.status }}</span>
    </div>
    <div>
      <strong>Origem: </strong>
      <span>{{ character.origin?.name }}</span>
    </div>
    <div>
      <div v-if="user" @click="user = addFavorite(id)">
        <div v-if="user.favorites.includes(id)">⭐</div>
        <div v-else>✰</div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { isLogged, addFavorite } from '~/services/userService'
// const CHARACTER = gql`
//   query {
//     character(id: 4) {
//       name
//       image
//     }
//   }
// `
export default {
  data() {
    return {
      id: String,
      character: {},
      user:Object
    }
  },
  methods:{
    addFavorite
  },
  beforeMount() {
    console.log(this.$route.params.id, this.$apollo.query)
    this.id = this.$route.params.id
    this.user = isLogged()
    // this.$apollo.queries.findCharacter.refresh()
  },
  apollo: {
    // character: {
    //   query: CHARACTER,
    // },
    findCharacter: {
      query: gql`
        query getCharacter($idDoPersonagem: ID!) {
          character(id: $idDoPersonagem) {
            name
            image
            status
            gender
            origin {
              name
            }
          }
        }
      `,
      variables() {
        return {
          idDoPersonagem: this.id,
        }
      },
      update(data) {
        console.log(data)
        this.character = data.character
      },
    },
  },
}
</script>
