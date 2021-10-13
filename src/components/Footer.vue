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
H3{
background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;
padding: 1rem;
text-align: center;
color:snow;

}
footer{
 max-height: 30px;
 box-shadow: 0px -6px 5px 0px rgba(159,148,148,0.75);
-webkit-box-shadow: 0px -6px 5px 0px rgba(159,148,148,0.75);
-moz-box-shadow: 0px -6px 5px 0px rgba(159,148,148,0.75);

}


</style>