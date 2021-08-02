<template>
  <my-navigation></my-navigation>
  <landing></landing>
</template>

<script>
import Navigation from './components/Navigation'
import Landing from './components/Landing';
  export default {
     components:{
         'my-navigation':Navigation,
         'landing':Landing
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
  background: #FFB1A4;
  /* https://codepen.io/notwaldorf/pen/omXwzw */
}
</style>
