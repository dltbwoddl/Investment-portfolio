<template>
  <div id="app">
    <router-link to="/home"></router-link>
    <router-link to="/risky"></router-link>
    <router-link to='/riskymodify'></router-link>
    <router-link to="/risky/:eventname"></router-link>
    <router-link to="/riskymodify/:eventname"></router-link>
    <router-link to="/risky/:eventname/:categoryname"></router-link>
    <router-link to='/safe'></router-link>
    <router-link to="/safemodify"></router-link>
    <router-link to='/safe/:eventname'></router-link>
    <router-link to="/habitmodify"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
