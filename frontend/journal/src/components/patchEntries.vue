<template>
  <div>
    <!-- want it so that it makes me edit it on the page not create a form -->
    
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
  
    patchEntrie: function(){
      axios.request({
        url: 'http://127.0.0.1:5000/api/entries',
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          title : this.title,
          loginToken: cookies.get('session'),
          content: this.content
        }
      }).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)
      })
    }
  }
};
</script>

<style scoped></style>
