<template>
  <div id="app">
  
    <router-view/>

    <MainTabBar class="MainTabBar"/>
  

  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
    
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
  //margin-top: 60px;
  //background-color:green;
}
.MainTabBar{
  z-index: 20;
  background-color: tomato;
}
</style>
