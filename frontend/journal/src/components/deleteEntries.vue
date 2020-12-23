<template>
  <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <i @click="deleteEntrie" class="far fa-trash-alt"></i>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    deleteEntrie: function(){
      axios.request({
        url: "http://127.0.0.1:5000/api/entries",
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
            loginToken: cookies.get('session'),
            entrieId : this.$route.query.id
          }
      }).then((response)=> {
        console.log(response)
      }).catch((error)=>{
        console.log(error)
      })
    }
  }
};
</script>

<style scoped></style>
