<template>
  <div class="container posts-new">
    <form v-on:submit.prevent="createPost()">
      <h1>New Post</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label>Body:</label>
        <input type="text" class="form-control" v-model="body" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input type="text" class="form-control" v-model="image" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      title: "",
      body: "",
      image: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createPost: function () {
      console.log("Creating a post!");
      var params = {
        title: this.title,
        body: this.body,
        image: this.image,
      };
      axios
        .post("/api/posts", params)
        .then(() => {
          this.$router.push("/posts");
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
