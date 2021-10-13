<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#Id</th>
        <th scope="col">Name</th>
        <th scope="col">Categories</th>
        <th scope="col">Status</th>
        <th scope="col">Number</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tasks" :key="item.id">
        <td scope="row">{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>
          <span v-for="(cat, index) in item.categories" :key="index">
            {{ item.categories.join(", ") }}
          </span>
        </td>
        <td>{{ item.status }}</td>
        <td>{{ item.number }}</td>
        <td class="buttons-actions">
          <button class="button-delite" @click="deleteTask(item.id)">
            Delete
          </button>
          <router-link
            class="router-link-button"
            :to="{ name: 'Edit', params: { id: item.id } }"
            >Edit</router-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapActions(["deleteTask"]),
  },
};
</script>
<style>
table,
th,
td {
  border: 1px solid white;
}
table {
  width: 100%;
  height: auto;
}
td {
  font-weight: lighter;
}
th {
  background-color: #42b983;
  color: white;
}
tr:nth-child(even) {
  background-color: white;
}
.buttons-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.button-delite {
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #ad1804;
  background-color: #b94242;
  color: white;
}
.router-link-button {
  background-color: #f5d627;
  color: black;
  font-size: 20px;
  width: 50px;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #f3b406;
}
</style>

