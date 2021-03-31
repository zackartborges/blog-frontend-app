<template>
  <div class="post-show">
    <h2>
      {{ post.title }}
    </h2>
    <h3>{{ post.body }}</h3>
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
