<template>
  <div class="input-wrapper">
    <button @click="updateAllTodo" class="list-dropdown-button">^</button>
    <input
      class="input-box"
      type="text"
      v-model="message"
      @keyup.enter="addTodo"
      placeholder="what to do"
    />
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    console.log("mounted from todo input");
  },
  unmounted() {
    console.log("unmounted from to do input");
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this.message);
      this.message = "";
    },
    updateAllTodo() {
      this.$store.dispatch("updateAllTodoStatus");
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 100%;
  border: 2px solid rgb(113, 102, 102);
}
.input-box {
  height: 4rem;
  background-color: rgba(0, 0, 0, 0.003);
  font-size: 2rem;

  display: block;
  border: 0px;
  flex-grow: 1;
  margin-left: 10px;
}
.input-box:focus {
  outline: none;
}
::placeholder {
  opacity: 0.3;
  padding: 20px;
}
.list-dropdown-button {
  border-radius: 5px;
  left: 0px;
  border: none;
  margin: 10px;
  width: 3rem;
  /* border-radius: 50%; */
  color: white;
  font-size: 2rem;
  /* height: 80%; */
  cursor: pointer;
  color: white;
  background-color: pink;
  opacity: 0.3;

  /* transform: translateX(2px); */
}
.list-dropdown-button:hover {
  opacity: 0.5;
}
</style>
