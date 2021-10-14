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

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');


* {
  margin: 0;
  padding: 0;
  height: 100%;
  
}
.container{
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
   color: #726f6f;
font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
}
@media screen and (max-width: 360px){
.container {
    min-height: 667px;
    min-width: 393px;
}
}

 @media screen and (min-width: 1350px){
.container {
   max-height: 591px;
}
 }
 @media screen and (min-width: 1650px){
.container {
 width: 1678px;
  max-height:914px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
}
 }
</style>
