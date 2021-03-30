<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <a href="/login"><button>LOGIN</button></a>
  </div>
</template>

<style>
body {
  background-color: yellowgreen;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
