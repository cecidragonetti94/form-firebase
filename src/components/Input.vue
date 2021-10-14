<template>
  <input
    class="input-name"
    id="input-name"
    type="text"
    v-model.trim="task.name"
    placeholder="Enter name"
  />

  <div class="formCheck">
    <input
      class="checkbox"
      type="checkbox"
      id="check-1"
      v-model="task.categories"
      value="javascript"
    />
    <label for="check-1">JavaScript</label>
    <input
      class="checkbox"
      type="checkbox"
      id="check-2"
      v-model="task.categories"
      value="node.js"
    />
    <label for="check-2">Node.js</label>
    <input
      type="checkbox"
      id="check-3"
      v-model="task.categories"
      value="php"
      class="checkbox"
    />
    <label for="check-3">PHP</label>
    <input
      class="checkbox"
      type="checkbox"
      id="check-4"
      v-model="task.categories"
      value="java"
    />
    <label for="check-4">Java</label>
  </div>
  <div class="div-radio">
    <input type="radio" id="radio-1" v-model="task.status" value="urgent" />
    <label for="radio-1">Urgent</label>
    <input type="radio" id="radio-1" v-model="task.status" value="relax" />
    <label for="radio-1">Relax</label>
  </div>
  <div class="form-number">
    <input class="input-number" type="number" v-model.number="task.number" />
    <button class="button-send" type="submit" :disabled="block">Send</button>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  computed: {
    block() {
      return this.task.name.trim() === "" ? true : false;
    },
  },
};
</script>

<style>
.input-name {
min-width: 450px;
    max-height: 40px;
    border-radius: 10px;
  border: 3px solid #fbc2eb;
  color: #2c3e50;
;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
  margin-top: 30px;
}
.input-name:hover {
  background-color: #a6c1ee;
}
.formCheck {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 32px;
}
.checkbox {
  width: 20px;
  height: 20px;
  margin-left: 20px;
}
.div-radio {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-width: 302px;
  max-height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.input-number {
  max-width: 45px;
  max-height: 25px;
  border-radius: 5px;
  border: 1px solid rgb(49, 132, 209);
}
.form-number {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
}
.button-send {
  width: 500px;
  height: 30px;
  border-radius: 5px;
  font-size: 20px;
  border: 3px solid #a6c1ee;
}

.button-send:hover {
  background-color: #fbc2eb;
  color: white;
}

/* @media screen and (max-width:725px){
  .button-send{
    width: 300px;
  }
} */
</style>