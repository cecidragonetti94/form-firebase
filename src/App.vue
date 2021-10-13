<template>
  <div class="container">
    <NavBar />

    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import {mapActions} from 'vuex'
export default {
  components: {
    NavBar,
    Footer,
  },
  methods:{
    ...mapActions(['loadLocalStorage'])
  },
  created(){
    this.loadLocalStorage()
  }
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
  height: 100%;
  
}

.container {

  
}
 @media screen and (max-width: 360px){
 *{
   width: 100%;
  padding:0px;
  margin:0px;
} 
.container {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content: space-between;
 
  background-color: rgb(143, 135, 135);
}

 }

</style>
