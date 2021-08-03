<template>
  <my-navigation></my-navigation>
  <landing></landing>
  <Footer></Footer>
</template>

<script>
import Navigation from './components/Navigation'
import Landing from './components/Landing';
import Footer from './components/Footer';
  export default {
     components:{
         'my-navigation':Navigation,
         'landing':Landing,
         Footer
       }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #FFB1A4;
  /* https://codepen.io/notwaldorf/pen/omXwzw */
}
</style>
