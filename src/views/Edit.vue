<template>
 <div class="container-h2">
 <h2>Task edit: <span class="span-name">{{ task.name }}</span></h2>
 </div>
 
  <form @submit.prevent="updateTask(task)" class="container-form">
    <Input :task="task" />
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Input from "../components/Input.vue";
export default {
  components: {
    Input,
  },
  computed: {
    ...mapState(['task']),
  },
  methods: {
    ...mapActions(['setingTask', 'updateTask']),
  },
  created() {
    this.setingTask(this.$route.params.id);
  },
};
</script>

<style scoped>

.container-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #eff4f8;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  min-height: auto;
  box-sizing: border-box;
  margin:100px 300px ;
}
.span-name{
  font-weight: lighter;
}
.container-h2{

  background-color: #fbc2eb;
    max-height: 70px;
        min-width: 424px;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    align-items: center;
 box-shadow: -9px -7px 5px 0px rgba(131, 129, 129, 0.75);
-webkit-box-shadow: -9px -7px 5px 0px rgba(128, 122, 122, 0.75);
-moz-box-shadow: -9px -7px 5px 0px rgba(179, 174, 174, 0.75);
    
}
</style>