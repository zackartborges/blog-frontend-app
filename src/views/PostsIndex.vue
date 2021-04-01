<template>
  <div class="home">
    <h1>All Posts</h1>
    <div class="card" style="width: 18rem">
      <img src="" class="card-img-top" alt="" />
      <div class="card-body" v-for="post in posts" v-bind:key="post.id">
        <!-- <div v-for="post in posts" v-bind:key="post.id"> -->
        <router-link v-bind:to="`posts/${post.id}`">
          <h2>
            {{ post.title }}
          </h2>
        </router-link>
        <!-- <h3>{{ post.body }}</h3> -->
        <!-- </div>  -->
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
    </div>
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
