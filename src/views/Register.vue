<template>
<Title text="User Registration"/>
<div class="alert-register" v-if="error.type !== null">
    {{error.message}}
</div>
<form class="form" @submit.prevent="processForm">
    <input type="email" placeholder="Email" v-model.trim="email">
    <input type="password" placeholder="password" v-model.trim="pass1">
    <input type="password" placeholder="Repeat password"  v-model.trim="pass2">
    <button type="submit" :disabled="block" >Register</button>
</form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Title from '../components/Title.vue'
export default {

components:{
    Title,
} ,

data: () => ({
    email: '',
    pass1: '',
    pass2: '',

}),
computed: {
    block(){
        if (!this.email.includes('@')){
            return true
        }
        if(this.pass1.length > 5 && this.pass1 === this.pass2){
            return false
        }
        return true
    },
    ...mapState(['error'])
},
methods: {
    ...mapActions(['registerUser']),
   async processForm(){
        await this.registerUser({email:this.email, password: this.pass1})
        if(this.error.type !== null){
            return
        }
        this.email= '',
        this.pass1 ='',
        this.pass2= ''
    }
}
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  align-items: center;
  max-height: auto;
}
</style>