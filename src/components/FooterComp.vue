<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact> Home </router-link>
      </li>
      <li>
        <router-link to="/done" exact>Done</router-link>
      </li>
      <li>
        <router-link to="/pending" exact>Pending</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
}
li {
  list-style-type: none;
}
li > a {
  text-decoration: none;
  font-size: 1.5rem;
}
a.router-link-active {
  color: #fff;
  background-color: rgb(85, 76, 76);
  padding: 5px 10px;
}
</style>
