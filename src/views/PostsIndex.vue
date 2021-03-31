<template>
  <div class="home">
    <h1>All Posts</h1>
    <div v-for="post in posts" v-bind:key="post.id">
      <router-link v-bind:to="`/posts/${post.id}`"
      <h2>
        {{ post.title }}
      </h2>
      <h3>{{ post.body }}</h3>
      </router-link>
    </div>
    <!-- links show action. Dialog is used to display something -->
  </div>
</template>
<style>
body {
  background-color: yellowgreen;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      posts: [],
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
      axios.get("/api/posts/").then((response) => {
        this.posts = response.data;
        console.log("all posts:", this.posts);
      });
    },
  },
};
</script>
