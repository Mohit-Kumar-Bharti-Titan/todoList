<template>
  <div class="container">
    <TodoInput />
    <ViewTodoList
      :todoList="notDone"
      :changeTodoStatus="changeTodoStatus"
      :deleteTodoItem="deleteTodoItem"
    />
  </div>
</template>
<script>
import TodoInput from "./TodoInput.vue";
import ViewTodoList from "./ViewTodoList.vue";

export default {
  name: "ViewPendingTodo",
  components: {
    TodoInput,
    ViewTodoList,
  },
  mounted() {
    console.log("mounted from viewPending");
  },
  unmounted() {
    console.log("unmounted from viewPending");
  },
  computed: {
    notDone: function () {
      return this.$store.getters.pendingTodo;
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
