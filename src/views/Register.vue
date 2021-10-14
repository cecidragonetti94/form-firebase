<template>
<Title text="User Registration"/>

<form class="form" @submit.prevent="processForm">
    <div class="alert-register" v-if="error.type !== null">
    {{error.message}}
</div>
    <input type="email" placeholder="Email" v-model.trim="email" class="input-email">
    <input type="password" placeholder="password" v-model.trim="pass1" class="input-pass1">
    <input type="password" placeholder="Repeat password"  v-model.trim="pass2" class="input-pass2">
    <button type="submit" :disabled="block" class="button-register" >Register</button>
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
  justify-content: space-evenly;
  min-width: 900px;
  align-items: center;
  max-height: auto;
  background-color: snow;
  border-radius: 20px;
   box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  max-height: 500px;

}
.input-email{
    min-width: 450px;
    max-height: 40px;
    border-radius: 10px;
    border: 3px solid #fbc2eb;
   
}
.input-pass1{
     min-width: 450px;
    max-height: 40px;
    border-radius: 10px;
    border: 3px solid #fbc2eb;
   
}
.input-pass2{
     min-width: 450px;
    max-height: 40px;
    border-radius: 10px;
    border: 3px solid #fbc2eb;
  
}.button-register{
    min-width: 200px;
    max-height: 40px;
    border-radius: 10px;
    border: 3px solid #fbc2eb;
    background-color: #b2c8f0 ;
    font-weight: bold;
    color:white;
    
}
.button-register:hover{
 background-color: #fbc2eb;
 cursor: pointer;
 border:#b2c8f0
}
.alert-register{
     max-height: 20px;
    font-size: 30px;
    color: #d14e4e;
}
</style>