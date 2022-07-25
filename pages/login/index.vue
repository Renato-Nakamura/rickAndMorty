<template>
  <div>
    <h1>{{create?"Cadastro":"Login"}}</h1>
    <div>
      <input v-model="username" type="text" placeholder="username" />
      <input v-model="password" type="text" placeholder="password" />
      <button @click="create?createUser(username,password,$router):getUser(username,password,$router)">{{create?"Cadastrar":"Login"}}</button>
    </div>
    <div @click="create= !create"> {{create? "Já possuí conta? Faça o Login":"Não possuí conta? Cadastre-se"}}</div>
  </div>
</template>

<script>
import { createUser, isLogged , getUser } from '~/services/userService'
export default{
    // layout: "empty",
    methods:{
      createUser,
      getUser
    },
    data(){
      return{
        username:"",
        password:"",
        create:false
      }
    },
    beforeMount(){
      const logged = isLogged()
      if(logged){
        console.log(logged,'logado')
      }
    }
}
</script>