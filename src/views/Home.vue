<template>
  <div class="containerHome">
    <Title text="Task form" />
    <p>
      If you already have a user please <strong>login</strong> to complete your
      tasks
    </p>
    <p>
      If you are not yet a user, please <strong>register</strong> to complete
      the task form
    </p>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
export default {
  components: {
    Title,
  },
};
</script>

<style scoped>
.containerHome{
 display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 220px;
  background-color: #fbc2eb;
  border-radius: 10px;

  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
@media screen and (min-width :360px) {
  .containerHome {
 
  min-width: 360px;
}

}
@media screen and (min-width :1650px) {
  .containerHome {
margin-right: 200px;
}

}
@media screen and (min-width :1350px) {
  .containerHome {
  
  width: 800px;
  margin-left: 307px;
}

}
</style>