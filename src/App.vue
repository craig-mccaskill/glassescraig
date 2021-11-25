<template>
  <my-navigation></my-navigation>
  <!-- <landing></landing> -->
  <!-- <About></About> -->
  <Items></Items>
  <Footer></Footer>
</template>

<script>
import Navigation from './components/Navigation'
import Landing from './components/Landing';
import Footer from './components/Footer';
import About from './components/About';
import Items from './components/Items';
  export default {
     components:{
         'my-navigation':Navigation,
         'landing':Landing,
         Footer,
         About,
         Items
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
