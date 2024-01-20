<template>
  <div class="container">
    <TodoInput />
    <ViewTodoList
      :todoList="allTodo"
      :changeTodoStatus="changeTodoStatus"
      :deleteTodoItem="deleteTodoItem"
    />
  </div>
</template>
<script>
import TodoInput from "./TodoInput.vue";
import ViewTodoList from "./ViewTodoList.vue";

export default {
  name: "ViewAllTodo",
  components: {
    TodoInput,
    ViewTodoList,
  },
  mounted() {
    console.log("mounted from view all");
  },
  unmounted() {
    console.log("unmounted from view all");
  },
  computed: {
    allTodo: function () {
      return this.$store.getters.allTodo;
    },
  },
  methods: {
    changeTodoStatus(idToUpdateStatus) {
      this.$store.dispatch("updateTodoStatus", idToUpdateStatus);
    },
    deleteTodoItem(idToDelete) {
      this.$store.dispatch("deleteTodo", idToDelete);
    },
  },
};
</script>

<style scoped>
.container {
  width: 70%;
}
</style>
