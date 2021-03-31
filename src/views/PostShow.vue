<template>
  <div class="posts-show">
    <div class="container">
      <h2>{{ post.title }}</h2>
      <p>{{ post.ingredients }}</p>
      <p>{{ post.directions }}</p>
    </div>
    <router-link v-bind:to="`/posts/${post.id}/edit`">See more info</router-link>
    <br />
    <button v-on:click="destroyPost(post)">Destroy Post</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      post: {},
    };
  },
  created: function () {
    this.showPosts();
  },
  methods: {
    showPosts: function () {
      axios.get("/api/posts/" + this.$route.params.id).then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
    },
    destroyPost: function (post) {
      axios.delete("/api/posts/" + post.id).then(() => {
        console.log("You did it! Or whatever!");
        this.$router.push("/posts");
      });
    },
  },
};
</script>
