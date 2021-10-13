<template>
  <div class="navBar">
    <router-link to="/">Home</router-link> 
    <router-link to="/register" v-if="!authenticatedUser">Register</router-link> 
        <router-link to="/login" v-if="!authenticatedUser">Login</router-link> 
    <router-link to="/form" v-if="authenticatedUser">Form</router-link> 
  <button v-if="authenticatedUser" @click="singOff">Sing off</button>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters(['authenticatedUser'])
  },
  methods:{
    ...mapActions(['singOff'])
  }
};

</script>

<style >
.navBar {
  padding: 30px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;
  display: flex;
  justify-content: space-between;
  max-height: 30px;
box-shadow: 2px 8px 5px 0px rgba(159,148,148,0.75);
-webkit-box-shadow: 2px 8px 5px 0px rgba(159,148,148,0.75);
-moz-box-shadow: 2px 8px 5px 0px rgba(159,148,148,0.75);
}


.navBar a {
  font-weight: bold;
  color: #eff4f8;
  font-size: 40px;
  text-decoration: none;
}

.navBar a.router-link-exact-active {
  color: #42b983;
}
@media screen and (max-width: 360px){
  .navBar{
    width: 100%;
    padding:0px;
    font-size: 40px;
    box-shadow: 2px 8px 5px 0px rgba(159,148,148,0.75);
-webkit-box-shadow: 2px 8px 5px 0px rgba(159,148,148,0.75);
-moz-box-shadow: 2px 8px 5px 0px rgba(159,148,148,0.75);
}
  }
  .navBar a {
  font-weight: bold;
  color: #eff4f8;
  font-size: 20px;
  text-decoration: none;
}

</style>