<template>
  <div id="card">
    <v-text-field label="Title" type="text" id="email" v-model="title" solo  />
    <v-text-field label="CreatedAt" type="text" id="password" v-model="createdAt" solo   />
    <v-textarea label="Content" v-model="content"></v-textarea>
    <v-btn @click="postEntrie">Post Entrie</v-btn>
  </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
export default {
  data() {
    return {
      title: '',
      createdAt: '',
      content: ''
    }
  },
  methods: {
    postEntrie: function(){
      axios.request({
        url: 'http://127.0.0.1:5000/api/entries',
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          loginToken: cookies.get("session"),
          title : this.title,
          createdAt: this.createdAt,
          content: this.content
        }
      }).then((response) =>{
        this.$router.push('/feed')
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
};
</script>

<style scoped>
html {
  text-align: center;
}
</style>
