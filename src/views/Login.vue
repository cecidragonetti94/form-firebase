<template>
  <div class="container">
    <Title text="Login" />
    <div class="alert" v-if="error.type !== null">
   {{error.message}}  
    </div>
    <form class="form" @submit.prevent="processForm">
    <input type="email" placeholder="Email" v-model.trim="email" >
    <input type="password" placeholder="password" v-model.trim="pass1"> 
    <button type="submit" :disabled="block" >Login</button>
</form>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import Title from "../components/Title.vue";

export default {
  components: {
    Title,
  },

data: () => ({
    email: '',
    pass1: '',
   

}),
computed: {
    block(){
        if (!this.email.includes('@')){
            return true
        }
        if(this.pass1.length > 5){
            return false
        }
        return true
    },
    ...mapState(['error'])
},
methods: {
    ...mapActions(['userLogin']),
  async  processForm(){
       await this.userLogin({email:this.email, password: this.pass1})
        if(this.error.type !== null){
          return
        }
        this.email= '',
        this.pass1 =''
       
    }
}
}

</script>

<style>
.container{
    display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  align-items: center;
  max-height: auto;
}
</style>