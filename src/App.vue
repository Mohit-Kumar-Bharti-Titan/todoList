<template>
  <div id="app">
    <h2>todos</h2>
    <router-view></router-view>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "./components/FooterComp.vue";
export default {
  name: "App",
  components: {
    FooterComp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  margin-top: 80px;
  width: 70%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
h2 {
  font-size: 5rem;
  color: pink;
  opacity: 0.5;
  margin: 2px;
}
</style>
