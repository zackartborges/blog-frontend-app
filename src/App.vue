<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </div>
        </div>
      </nav>
      <!-- <router-link to="/">Home</router-link> -->
      |
      <router-link to="/about">About</router-link>
      |
      <span v-if="!isLoggedIn()">
        <router-link to="/signup">Signup</router-link>
      </span>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link>
      |
      <router-link to="/post">View All</router-link>
      |
      <router-link to="/post/new">New Post</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
.home {
  /* font-family: Arial Narrow, Arial, sans-serifx; */
  font-family: Andale Mono, AndaleMono, monospace;
}
body {
  background-image: url(assets/double-bubble-outline.png);
}
</style>
<script>
export default {
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
      // if (localStorage.getItem("jwt")) {
      //   return true;
      // } else {
      //   return false;
      // }
    },
  },
};
</script>
