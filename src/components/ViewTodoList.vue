<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="todo in todoList" :key="todo.id">
        <button
          class="button button5"
          @click="changeTodoStatus(todo.id)"
          v-bind:class="{ greenbgc: todo.status }"
        ></button>
        <div class="message-wrapper">
          <p>{{ todo.todo }}</p>
        </div>
        <button class="pink-btn" @click="deleteTodoItem(todo.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ViewTodoList",
  props: ["todoList", "changeTodoStatus", "deleteTodoItem"],
  mounted() {
    console.log("viewtodo generic mounted");
  },
  unmounted() {
    console.log("viewtodo generic unmounted");
  },
};
</script>
<style scoped>
.list-wrapper {
  display: flex;
  flex-wrap: wrap;
}

ul {
  list-style: outside none;
  display: flex;
  flex-direction: column;
  padding: 1px;
  /* align-items: space-around; */
  /* justify-content: space-around; */
  flex-wrap: wrap;
  width: 100%;
}
li {
  background-color: rgba(0, 0, 0, 0.003);
  font-size: 1.5rem;
  border: 1px solid black;
  width: 100%;
  padding: 4px 2px;
  /* margin: 2px; */
  flex-wrap: wrap;
}
ul > li {
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  margin: auto;
  position: relative;
}
ul > li > p {
  flex-grow: 1;
  width: 50%;
  word-break: break-all;
  display: block;
}
.btn {
  background-color: rgb(255, 255, 255);
  padding: 12px 16px;
  font-size: 16px;
  align-self: flex-end;
  margin: auto 2px;
  align-self: flex-end;
  position: absolute;
  bottom: 2px;
  right: 2px;
}
.button {
  background-color: white;
  border: 2px solid black;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: auto 2px;
  opacity: 0.7;
  margin-left: 10px;
  margin-right: 20px;
}
.button5 {
  border-radius: 50%;
}
.btn:hover {
  background-color: rgb(226, 51, 42);
  color: white;
}
.greenbgc {
  background: rgb(181, 242, 90);
}
.message-wrapper {
  flex-grow: 1;
  flex: 1;
}
.message-wrapper > p {
  word-break: break-all;
}

.pink-btn {
  border-radius: 5px;
  border: none;
  margin: auto;
  width: 3rem;
  height: 3rem;
  color: white;
  font-size: 2rem;
  height: 60px;
  cursor: pointer;
  color: white;
  background-color: pink;
  opacity: 0.3;
  margin-left: 20px;
  margin-right: 10px;
}
.pink-btn:hover {
  opacity: 0.6;
}
</style>
