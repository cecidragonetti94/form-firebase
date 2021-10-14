<template>
  <footer>
    <h3>&copy; Cecilia Dragonetti - {{ year }}</h3>
  </footer>
</template>
<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
h3{
background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;
padding: 1rem;
text-align: center;
color:snow;
}
footer{
 box-shadow: 0px -6px 5px 0px rgba(159,148,148,0.75);
-webkit-box-shadow: 0px -6px 5px 0px rgba(159,148,148,0.75);
-moz-box-shadow: 0px -6px 5px 0px rgba(159,148,148,0.75);
height: auto;
}
@media screen and (max-width:360px){

footer{
 max-height: 30px;
}
}


@media screen and (min-width:1650px){

footer{
 max-height: 50px;
min-width: 1675px;
}
}

@media screen and (min-width:1350px){

footer{
 max-height: 30px;
 min-width: 1350px;
}
}
</style>