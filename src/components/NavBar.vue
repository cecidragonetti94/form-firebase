<template>
  <div class="navBar">
    <router-link to="/">Home</router-link>
    <router-link to="/register" v-if="!authenticatedUser">Register</router-link>
    <router-link to="/login" v-if="!authenticatedUser">Login</router-link>
    <router-link to="/form" v-if="authenticatedUser">Form</router-link>
    <button v-if="authenticatedUser" @click="singOff" class="sing-off">Sing off</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["authenticatedUser"]),
  },
  methods: {
    ...mapActions(["singOff"]),
  },
};
</script>

<style >

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap');

.navBar {
 
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 8px 5px 0px rgba(159, 148, 148, 0.75);
  -webkit-box-shadow: 2px 8px 5px 0px rgba(159, 148, 148, 0.75);
  -moz-box-shadow: 2px 8px 5px 0px rgba(159, 148, 148, 0.75);
}
.navBar a {
  font-weight: bold;
  color: #eff4f8;
  font-size: 40px;
  text-decoration: none;
  font-family: 'Ubuntu', sans-serif;
}

.navBar a.router-link-exact-active {
  color:#a6c1ee
}
.sing-off{
  background-color: #fbc2eb;
  border-radius: 5px;
  width: 80px;
  height: 40px;
  font-weight: bold;
  color:white;
  border: none;
  
}
.sing-off:hover{
  color:#a6c1ee;
}
@media screen and (min-width: 1680px) {
  .navBar {
    min-height: 50px;
    min-width: 1950px;
    justify-content: space-evenly;
    align-items: center;
  }
}
@media screen and (min-width: 1350px) {
  .navBar {
    max-height: 25px;
    max-width: 1340px;
    
  }
}


@media screen and (max-width: 360px) {
  .navBar {
    padding: 0px;
    max-height: 45px;
  }
}
.navBar a {
  font-size: 20px;
}
</style>