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
h1{
    font-size: 50px;
    color: #2c3e50;
}
</style>