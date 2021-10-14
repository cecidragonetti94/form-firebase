<template>
  <div class="container-form">
    <Title text="Form" />
    <p class="p-form">
      This is a form made with <strong>v-model</strong> in which the data
      entered is totally dynamic.
    </p>
    <p>Please complete the form</p>
    <form @submit.prevent="sendForm">
      <Input :task="task" />
      <ListTask/>
    
    </form>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Input from "../components/Input.vue";
import ListTask from '../components/ListTask.vue'
import { mapActions } from "vuex";
const shortid = require("shortid");


export default {
  components: {
    Title,
    Input,
    ListTask,
  },
  data: () => ({
    task: {
      id: "",
      name: "",
      categories: [],
      status: "",
      number: 0,
    },
  }),
  methods: {
    ...mapActions(['setTask','loadLocalStorage']),
    sendForm() {
      console.log(this.task);
      if (this.task.name.trim() === "") {
        console.log("Campo vacio");
        return;
      }
      console.log("no esta vacio");
      //genera un id aleatorio
      this.task.id = shortid.generate();
      console.log(this.task.id);
      //enviar datos
      this.setTask(this.task);
      //limpiar datos
      this.task = {
        id: '',
        name: "",
        categories: [],
        status: "",
        number: 0,
      };
    },
    created(){
    this.loadLocalStorage()
  }
    
  },
};
</script>
<style >

.container-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eff4f8;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: #fbc2eb;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
}
.p-form {
  
  font-size: 25px;
}
@media screen and (min-width: 1680px) {
 .container-form{
   max-height: 700px;
   margin-top:90px;
   margin-bottom: 145px;
    

 }
}
@media screen and (min-width: 1350px) {
  .container-form{
   height: auto;
   max-width: 900px;
   margin-left: 250px;
  }

}


@media screen and (max-width: 360px) {
}
</style>

