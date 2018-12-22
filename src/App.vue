<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Test from './components/test';
  import User from './components/user';
  import Navbar from './components/navbar';

  export default {
    name: 'App',
    components: {
      Test, User, Navbar
    }
  }
</script>

<style>

</style>
