<template>
<h1>{{text}} </h1>  
</template>

<script>
export default {
    props:{
        text: String,
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');

h1{
    font-size: 50px;
    color: #615f5f;
    font-family: 'Bungee Shade', cursive;
    max-height: 166px;
}
@media screen  and (min-width:1350px){
    h1{
 max-height: 100px;
    }
   
}
</style>