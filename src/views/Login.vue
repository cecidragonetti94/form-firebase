<template>
  <div class="container">
    <Title text="Login" />
    <div class="alert" v-if="error.type !== null">
      {{ error.message }}
    </div>
    <form class="form" @submit.prevent="processForm">
      <input
        type="email"
        placeholder="Email"
        v-model.trim="email"
        class="input-mail"
      />
      <input
        type="password"
        placeholder="password"
        v-model.trim="pass1"
        class="input-pass"
      />
      <button type="submit" :disabled="block" class="buton-login">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Title from "../components/Title.vue";

export default {
  components: {
    Title,
  },

  data: () => ({
    email: "",
    pass1: "",
  }),
  computed: {
    block() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.pass1.length > 5) {
        return false;
      }
      return true;
    },
    ...mapState(["error"]),
  },
  methods: {
    ...mapActions(["userLogin"]),
    async processForm() {
      await this.userLogin({ email: this.email, password: this.pass1 });
      if (this.error.type !== null) {
        return;
      }
      (this.email = ""), (this.pass1 = "");
    },
  },
};
</script>

<style>
form{
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  align-items: center;
  max-height: auto;
}
.alert {
  max-height: 20px;
  font-size: 30px;
  color: #d14e4e;
}
.input-mail {
border: 3px solid #fbc2eb;
border-radius: 10px;
}
.input-pass{
  border: 3px solid #fbc2eb;
  border-radius: 10px;
}
.buton-login {
  border-radius: 10px;
  border: 3px solid #fbc2eb;
  background-color: #b2c8f0;
  font-weight: bold;
  color: white;
}
@media screen and (min-width: 1350px) {
  .container {
    max-height: 609px;
    max-width: 1350px;
  }
}
form {
  min-height: 400px;
  min-width: 600px;
  max-height: 500px;

}
.input-mail {
  min-width: 450px;
  max-height: 40px;
 
}
.input-pass {
  min-width: 450px;
  max-height: 40px;

}
.buton-login {
  min-width: 200px;
  max-height: 40px;
}
@media screen and (min-width: 1650px) {
 .container {
    max-height: 947px;
  min-width: 1680px;
 overflow: hidden;
  }
}
form {
  min-height: 400px;
  min-width: 600px;
  max-height: 500px;

}
</style>