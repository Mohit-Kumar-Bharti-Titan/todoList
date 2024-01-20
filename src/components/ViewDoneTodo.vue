<template>
  <div class="container">
    <TodoInput />
    <ViewTodoList
      :todoList="completedJob"
      :changeTodoStatus="changeTodoStatus"
      :deleteTodoItem="deleteTodoItem"
    />
  </div>
</template>
<script>
import TodoInput from "./TodoInput.vue";
import ViewTodoList from "./ViewTodoList.vue";

export default {
  name: "ViewDoneTodo",
  components: {
    TodoInput,
    ViewTodoList,
  },
  mounted() {
    console.log("mounted from view done todo");
  },
  unmounted() {
    console.log("unmounted from view done todo");
  },
  computed: {
    completedJob: function () {
      return this.$store.getters.doneTodo;
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
