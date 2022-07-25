<template>
  <div>
    <h2>Personagem {{ character? character.name:""}}</h2>
    <img :src="character.image" alt="">
    <span>{{character.gender}}</span>
    <span>{{character.status}}</span>
    <span>{{character.origin?.name}}</span>
  </div>
</template>

<script>
import gql from 'graphql-tag'
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
      character:Object
    }
  },
  beforeMount() {
    console.log(this.$route.params.id, this.$apollo.query)
    this.id = this.$route.params.id
    // this.$apollo.queries.findCharacter.refresh()
  },
  apollo: {
    // character: {
    //   query: CHARACTER,
    // },
    findCharacter: {
      query: gql`
        query getCharacter($idDoPersonagem: ID!){
          character(id: $idDoPersonagem) {
            name
            image
            status
            gender
            origin{
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
