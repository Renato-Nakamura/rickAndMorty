<template>
  <div class="flex flex-col items-center ">
    <h1 class="mb-5 text-xl font-bold">{{create?"Cadastro":"Login"}}</h1>
    <div class="flex flex-col items-center gap-3 mb-3">
      <input class="px-1" v-model="username" type="text" placeholder="username" />
      <input class="px-1" v-model="password" type="text" placeholder="password" />
      <button class="bg-btn py-1 w-full" @click="create?createUser(username,password,$router):getUser(username,password,$router)">{{create?"Cadastrar":"Login"}}</button>
    </div>
    <div class="text-blue cursor-pointer" @click="create= !create"> {{create? "Já possuí conta? Faça o Login":"Não possuí conta? Cadastre-se"}}</div>
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

<style>
.bg-btn{
  background-color: var(--secondary);
}
.text-blue{
  color: blue;
  text-decoration: underline;
}
</style>