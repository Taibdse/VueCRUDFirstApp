<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Vue App</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/test">Test</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
    export default {
        name:'navbar'
    };
</script>

<style>
</style>
